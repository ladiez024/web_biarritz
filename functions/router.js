const express = require('express');
const path = require('path');
const router = express.Router();
// Definir rutas
router.get('/', (req, res) => {
    res.render('index.html');
});

router.get('/menu', (req, res) => {
    res.render('menu.html');
});

router.get('/biarritz', (req, res) => {
    res.render('biarritz.html');
});

module.exports = router;