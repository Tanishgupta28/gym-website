const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'))
app.use('css/',express.static('public/css'))
app.use('scripts/',express.static('public/scripts'))
app.use(express.static('public/'));

app.get('/' ,(req,res) => {
    res.render('home')
})

app.get('/contact' ,(req,res) => {
    res.render('contact')
})

app.get('/about' ,(req,res) => {
    res.render('about')
})

app.listen(3000, () => {
    console.log("server started");
})