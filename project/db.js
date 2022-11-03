var mysql = require('mysql');

var con = mysql.createConnection({
        connectionLimit : 100,
        connectTimeout  : 60 * 60 * 1000,
        acquireTimeout  : 6000000,
        timeout         : 60 * 60 * 1000,
        host: "localhost",
        user: "web_app",
        password: "Daffodils963",
        database: "web_app",

});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

  //export it for use in application
  module.exports.con = con;
