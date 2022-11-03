// const axios = require('axios')
// import express from 'express';
const express = require('express');
// import exphbs from 'express-handlebars';
const exphbs = require('express-handlebars');
// const db = require('./db');
const app = express()

// const { query } = require('express');
app.set('view engine', '.hbs');                 // Tell express to use the handlebars engine whenever it encounters a *.hbs file.
app.engine('.hbs', exphbs.engine({extname: ".hbs",defaultLayout:'main',layoutsDir: __dirname + '/views/layouts'}));  // Create an instance of the handlebars engine to process templates


require('dotenv').config();

//middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
const port = process.env.PORT || 3000;


const bodyParser = require('body-parser');

const scrapers = require('./scrapers');
const db = require('./db')

app.use(bodyParser.json())
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // disabled for security on local
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
});

//Static Files
app.use(express.static(__dirname + '/public')); //this is to serve our public folder as static
// app.use(express.static(__dirname + '/server')); //this is to serve our public folder as static

//API ROUTES

app.get('/', (req,res)=>{
    res.status(200).render("index");
})

app.get('/results', (req,res)=>{

    db.con.query('SELECT * FROM product', function(error, rows, fields){
    // Save the products info
    // let people = rows;
    return res.render('results', {data: rows});
    
    })


    // res.sendFile(__dirname + '/public/results.php');
})

app.post('/results', async (req, res) => {
    let data = req.body;
    console.log(data);
    const channelData = await scrapers.scrapeChannel(data)
    res.redirect('/results');

})

app.listen(port, () => console.log(`App listening on port ${port}!`))
