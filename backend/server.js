const express = require('express');
const { chats } = require('./data/data');
const dotenv = require("dotenv");
const connectDB = require('./config/db');

dotenv.config();
connectDB();

// const port = 8000;

const app = express();

// Routes
app.get('/', (req, res) => {
    // console.log("app is listeninig here");
    res.send("App is running");
});

app.get('/chats/all', (req, res) => {
    res.send(chats);
})


app.get('/chat/:id', (req, res) => {
    res.send(chats);
})

// console.log(chats);

const port = process.env.PORT;

app.listen(port, console.log("Server started on port ", port));