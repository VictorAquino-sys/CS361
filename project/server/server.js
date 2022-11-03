const express = require('express'); //Line 1
const app = express(); //Line 2
const port = 3080; //Line 3



// create a GET route
app.get('/server', (req, res) => { //Line 9
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' }); //Line 10
}); //Line 11

app.post('/server', async (req, res) => {
  let data = req.body;
  console.log(data);
  res.redirect('/server');

})

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`)); //Line 6