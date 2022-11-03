# CS361 Project Repository
1) HOW TO USE THE MICROSERVICE: Getting Started With Creat React App / MySQL / Node JS

Installing Express
Open terminal and create a folder. Inside the folder run the following commands:

Installing Express
$ npm install express --save

node_modules directory 
$ npm install body-parser --save

MySQL Database 
$npm install mysql

Clone repository:
$ git@github.com:VictorAquino-sys/CS361.git

2) How to request data

app.get('/results', (req,res)=>{
    db.con.query('SELECT * FROM product', function(error, rows, fields){
    return res.render('results', {data: rows});
    })
})

app.post('/results', async (req, res) => {
    let data = req.body;
    console.log(data);
    const channelData = await scrapers.scrapeChannel(data)
    res.redirect('/results');
})
