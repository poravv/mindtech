const express = require('express');
const rutas = express()

const welcome = require('./servicios/welcome')
const about = require('./servicios/about')
const theme = require('./servicios/theme')
const client_header = require('./servicios/client_header')
const service_header = require('./servicios/service_header')
const product_header = require('./servicios/product_header')
const footer_header = require('./servicios/footer_header')
const destacado_header = require('./servicios/destacado_header')
const client = require('./servicios/client')
const service = require('./servicios/service')
const product = require('./servicios/product')
const footer_label = require('./servicios/footer_label')
const footer_icon = require('./servicios/footer_icon')
const usuario = require('./servicios/usuario')
const icon = require('./servicios/icon');

rutas.use('/mindtech/api/welcome',welcome);
rutas.use('/mindtech/api/about',about);
rutas.use('/mindtech/api/theme',theme);
rutas.use('/mindtech/api/client_header',client_header);
rutas.use('/mindtech/api/service_header',service_header);
rutas.use('/mindtech/api/product_header',product_header);
rutas.use('/mindtech/api/footer_header',footer_header);
rutas.use('/mindtech/api/destacado_header',destacado_header);
rutas.use('/mindtech/api/client',client);
rutas.use('/mindtech/api/service',service);
rutas.use('/mindtech/api/product',product);
rutas.use('/mindtech/api/footer_label',footer_label);
rutas.use('/mindtech/api/footer_icon',footer_icon);
rutas.use('/mindtech/api/usuario',usuario);
rutas.use('/mindtech/api/icon',icon);

module.exports = rutas;