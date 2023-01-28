// import express from 'express';
const express = require('express');
// import exphbs from 'express-handlebars';
const exphbs = require('express-handlebars');
const app = express()

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

//API ROUTES

app.get('/', (req,res)=>{
    res.status(200).render("index");
})

app.get('/results', (req,res)=>{

    db.con.query('SELECT * FROM product', function(error, rows, fields){
    return res.render('results', {data: rows});
    
    })

})

app.post('/results', async (req, res) => {
    let data = req.body;
    const channelData = await scrapers.scrapeChannelAMAZON(data)
    // const channelData2 = await scrapers.scrapeChannelWALMART(data)
    res.redirect('/results');

})

app.post('/delete_product', function(req, res)
{
    let data = req.body;

    query1 = `DELETE FROM product WHERE id = '${data['delete-name_product']}'`;
    db.con.query(query1,function(error, rows, fields){

        // Check to see if there was an error
        if (error) {

            // Log the error to the terminal so we know what went wrong, and send the visitor an HTTP response 400 indicating it was a bad request.
            console.log(error)
            res.sendStatus(400);
        }
        else
        {
            res.redirect('/results');
        }
    })
});

app.listen(port, () => console.log(`App listening on port ${port}!`))
