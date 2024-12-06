require('dotenv').config();
const express = require('express');
const session = require('express-session');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3030;

// Rutas externas
const mainRoutes = require('./routes/main');
const checkoutRoutes = require('./routes/checkout');

// Importar productos desde archivo
const productos = require('./data/productos');

// Configuración de la vista
app.set('view engine', 'ejs');
app.set('views', './views');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS - Permitir solicitudes desde el frontend
const corsOptions = {
  origin: process.env.CORS_ORIGIN || 'http://localhost:5500',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true, // Si estás usando cookies
};
app.use(cors(corsOptions));

// Configuración de la sesión
app.use(session({
  secret: process.env.SESSION_SECRET || 'secret',
  resave: false,
  saveUninitialized: true,
  cookie: {
    httpOnly: true,
    secure: false, // Cambiar a true si usas HTTPS
    maxAge: 1000 * 60 * 60 * 24, // 1 día de duración
  },
  name: 'sessionId', // Cambia el nombre predeterminado
}));

// Servir archivos estáticos (imágenes, CSS, JS)
app.use(express.static('public'));

// Ruta para probar la conexión
app.get('/test', (req, res) => {
  res.json({ message: 'Conexión exitosa' });
});

// Ruta para obtener los productos
app.get('/api/productos', (req, res) => {
  res.json(productos);
});

// Rutas externas
app.use('/', mainRoutes);
app.use('/checkout', checkoutRoutes);

// Middleware para manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Error interno del servidor' });
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
  console.log('Rutas disponibles:');
  console.log(' - /test: Verificar conexión');
  console.log(' - /api/productos: Obtener productos');
});
