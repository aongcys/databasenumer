const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const port = 4002;
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

//connect mysql

const connection = mysql.createConnection({
  host: process.env.MYSQL_HOST || 'localhost',
  user: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASSWORD || 'root',
  database: process.env.MYSQL_DATABASE || 'DB_function',
  port: process.env.MYSQL_PORT || 8889
});

app.use(cors({
  origin: '*',
  methods: ['GET'],//read
  allowedHeaders: ['Authorization', 'Content-Type'],
  credentials: false,
}));

connection.connect((err) => {
  if (err) {
    console.log('Error to link database na kub = ', err);
    return;
  } else {
    console.log('link database susess na')
  }
})

app.get("/getrootfunc", async (req, res) => {
  try {
    connection.query("SELECT * FROM rootfunction", (err, result, filelds) => {
      if (err) {
        console.log(err);
        return res.status(400).send();
      } else {
        res.status(200).json(result);
      }
    })
  } catch (err) {
    console.log(err);
    return res.status(500).send();
  }
})

// app.get("/getlinearalgebra", async (req, res) => {

app.get("/getmatrixequeation", async (req, res) => {
  try {
    connection.query("SELECT * FROM matrixequeation", (err, result, filelds) => {
      if (err) {
        console.log(err);
        return res.status(400).send();
      } else {
        res.status(200).json(result);
      }
    })
  } catch (err) {
    console.log(err);
    return res.status(500).send();
  }
})

app.get("/getinterpolationfunc", async (req, res) => {
  try {
    connection.query("SELECT * FROM interpolationfunc", (err, result, filelds) => {
      if (err) {
        console.log(err);
        return res.status(400).send();
      } else {
        res.status(200).json(result);
      }
    })
  } catch (err) {
    console.log(err);
    return res.status(500).send();
  }
})

app.get("/getintegreatfunction", async (req, res) => {
  try {
    connection.query("SELECT * FROM integreatfunction", (err, result, filelds) => {
      if (err) {
        console.log(err);
        return res.status(400).send();
      } else {
        res.status(200).json(result);
      }
    })
  } catch (err) {
    console.log(err);
    return res.status(500).send();
  }
})

app.get("/getdifffunction", async (req, res) => {
  try {
    connection.query("SELECT * FROM difffunction", (err, result, filelds) => {
      if (err) {
        console.log(err);
        return res.status(400).send();
      } else {
        res.status(200).json(result);
      }
    })
  } catch (err) {
    console.log(err);
    return res.status(500).send();
  }
})

app.listen(port, () => console.log('server is running at port', port))
