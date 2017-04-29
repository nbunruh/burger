if (process.env.JAWSDB_URL)
	connection = mysql.createConnection(process.env.JAWSDB_URL);
else {

	var mysql = require('mysql');

	connection = mysql.createConnection({
		host: "localhost",
		user: "root",
		password: "cuzcokush5",
		database: "burger_db"
	});
}

connection.connect(function(err) {
    if (err) {
        console.error('Connection error: ' + err.stack);
        return;
    }
    console.log('Connection threadId: ' + connection.threadId);
});

module.exports = connection;