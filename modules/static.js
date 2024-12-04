const express = require('express');
const path = require('path');

const staticModule = express.static(path.join(__dirname, '../public'));

module.exports = staticModule;
