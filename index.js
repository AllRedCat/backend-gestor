import mysql from 'mysql2';
import bodyParser from 'body-parser';
import pkg from 'express';

const express = pkg;

const app = express();
const port = 3000;

const dbConfig = {
    host: '127.0.0.1',
    user: 'gestor',
    password: '/sys/G3st0r',
    database: 'manager',
};

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/clientes', (req, res) => {
    const connection = mysql.createConnection(dbConfig);
    connection.connect();
    connection.query('SELECT * FROM clientes', (err, results) => {
        if (err) {
            console.log(err);
            res.status(500).json({ message: "Error" })
        }
        else {
            res.status(200).json(results);
        }
        connection.end();
    });
});

app.post('/api/clientes', (req, res) => {
    console.log(req);
    res.send('ok');
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});