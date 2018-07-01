const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    res.render('index')
});

router.get('/home', (req, res)=>{
    res.render('index')
});

router.get('/about', (req, res) => {
    res.render('about')
});

router.get('/work', (req, res) => {
    res.render('work')
});

router.get('/contact', (req, res) => {
    res.render('contact')
});


module.exports = router;