// Set up MySQL connection.
var mysql = require("mysql");
var connection;
if(process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "burgers_db"
  });
};

var mysql = require("mysql");
// Make connection.
connection.connect(function(err) {
  if (err)throw err; {
   
  console.log("connected as id " + connection.threadId);

connection.query(`CREATE TABLE [IF NOT EXISTS] burgers (
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
)`);
  }
});

// Export connection for our ORM to use.
module.exports = connection;
