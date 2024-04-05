const express = require('express');
const { chats } = require('./data/data');
const dotenv = require("dotenv");
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const {notFound, errorHandler} = require('./middleware/errorMiddleware');

dotenv.config();
connectDB();

// const port = 8000;

const app = express();
app.use(express.json());

// Routes
// app.get('/', (req, res) => {
//     // console.log("app is listeninig here");
//     res.send("App is running");
// });

// app.get('/chats/all', (req, res) => {
//     res.send(chats);
// })


// app.get('/chat/:id', (req, res) => {
//     res.send(chats);
// })

app.use('/api/user', userRoutes);
app.use('/api/user/login', userRoutes);

// error handling
// agar req kahin, bhi nahi gayi, then wo inpe handle hogi
app.use(notFound);
app.use(errorHandler);

// console.log(chats);

const port = process.env.PORT;

app.listen(port, console.log("Server started on port ", port));