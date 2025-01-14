const express = require('express');
const path = require('path');
const router = express.Router();
// Definir rutas
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/html/index.html'));
});

router.get('/menu', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/html/menu.html'));
});

router.get('/biarritz', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/html/biarritz.html'));
});

module.exports = router;