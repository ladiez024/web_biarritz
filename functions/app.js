const express = require('express');
const path = require('path');
const serverless = require('serverless-http');
const app = express();
const rutas = require('./router');

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static(path.join(__dirname,"../public")));

app.use(rutas);

// Exporta la función serverless para Netlify
module.exports.handler = serverless(app);