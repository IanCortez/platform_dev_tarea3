const mysql = require('mysql');
const express = require('express');
const cors = require('cors');

var app = express();

app.use(cors());


function getMenu(req, res){

	var connection = mysql.createConnection({
		host: "localhost",
		user: "utec",
		password: "1234567890",
		database: "restaurant"
	});

	connection.connect();

	var myQuery = "SELECT nombre_plato, precio " +  
		      "FROM menu;";

	connection.query(myQuery, function(error, results, fields){
		if(error) throw error;

		res.send(results);
		connection.end();
	});
}

app.get('/menu', getMenu);

app.listen(3000, function(){
	console.log("Listening at port 3000");
});
