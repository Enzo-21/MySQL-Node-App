var mysql = require('mysql');

var db = mysql.createConnection({
    host     : 'localhost',
    port     : '3306',
    user     : 'root',
    password : 'Enzockapo210797bf',
    database : 'escuela',
  });

module.exports = {db};