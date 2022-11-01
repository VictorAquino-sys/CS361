// const axios = require('axios')
const express = require('express')
const app = express()

//middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
const port = 3000


const bodyParser = require('body-parser');

const scrapers = require('./server/scrapers');
const db = require('./server/db')

app.use(bodyParser.json())
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // disabled for security on local
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
});

//Static Files
app.use(express.static('public')); //this is to serve our public folder as static

//API ROUTES

app.get('/index', (req,res)=>{
    res.sendFile(__dirname + '/public/index.html');
})

app.get('/creators', async (req, res) => {
    const creators = await db.getAllCreators();
    // const creators = [
    //     {name: 'balck', img: 'https://'},
    //     {name: 'dave lee', img: 'https://'},
    // ]

    res.send(creators)
})

app.post('/creators', async (req, res) => {
    console.log(req.body.userURL);
    const channelData = await scrapers.scrapeChannel(req.body.userURL)
    const creators = await db.insertCreator(channelData.name, channelData.avatarURL, req.body.channelURL)
    res.send('success');
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
