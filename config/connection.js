// Set up MySQL connection.
var mysql = require("mysql");

var connection;

 if(process.env.JAWSDB_URL) {
     connection = mysql.createConnection(process.env.JAWSDB_URL);
 } else {
connection = mysql.createConnection({
  host: "jj820qt5lpu6krut.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  user: "wdu5rg1e17qhqqvf",
  password: "z4xvvfsb4rvzdrd7",
  database: "eua5rmkhzbnqef4s"
});

};

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;