const express = require ("express");
const mongodb = require ("mongodb").MongoClient;
const ObjectId = require('mongodb').ObjectId;
const mongoose = require('mongoose');


const app = express();
const PORT = process.env.PORT || 3001;

const connectionStringURI = `mongodb://127.0.0.1:27017/socialnetDB`;

let db; 

mongodb.connect(
    connectionStringURI,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err, client) => {
      db = client.db();
      app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${PORT}`);
      });
    }
  );
   
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
