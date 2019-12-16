const express = require('express');
const cors = require('cors');
const server = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');
const port = 3004;
const connection = require('./config');

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(express.json());
server.use(cors());
server.use(express.static('dist'));


connection.connect((err) => {
    if (err) {
        console.error(err);
    }else {
        console.log('connection successful')
    }
});

server.get('/Description/:id', (req, res) => {
    connection.query(`SELECT * FROM information WHERE id = '${req.params.id}';`, (err, results) => {
        if(err) {
            console.log(err)
        } else {
            res.status(200).send(results)
        }
    })    
});



// server.get('/Description/:id', (req, res) => {
//    console.log(req.params.id)
//     //connection.query('SELECT * information', (error, results) => {
//     connection.query(`SELECT * FROM information WHERE id = '${req.body.id}';`, (err, results) => {
//         if(error) {
//             console.log(error)
//         } else {
//             res.status(200).send(results)
//         }
//     })    
// });




server.listen(port, () => {
    console.log(`listening on port${port}`)
})
