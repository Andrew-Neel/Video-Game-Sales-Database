var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "node",
  password: "",
  database: "vgsales"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("SELECT * FROM vg_genre", function (err, result) {
  if (err) throw err;
  console.log(result);
   });
});
