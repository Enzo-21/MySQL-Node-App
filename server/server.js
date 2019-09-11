var express = require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var cors = require('cors');
var database = require('./conection_db');


var app = express();
var port = 8080;

app.use(cors());
app.listen(port, ()=> {
    console.log(`Escuchando en el puerto ${port}`);
});

app.get('/estudiantes', (req, res)=> {
    var query = 'SELECT * FROM estudiantes;'

    database.db.query(query, (err, results)=> {
        if (err) {
            console.log('No funciona');
            console.log(err);
        
        } else {
            console.table(results);
            res.send(results)
        }
    })
})

// ;