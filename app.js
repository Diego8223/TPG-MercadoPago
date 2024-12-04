// app.js
const express = require('express');
const session = require('express-session');
const app = express();
const port = 3030;

const mainRoutes = require('./routes/main');
const checkoutRoutes = require('./routes/checkout');

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
}));

// Rutas
app.use('/', mainRoutes);
app.use('/checkout', checkoutRoutes);

// Iniciar servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
