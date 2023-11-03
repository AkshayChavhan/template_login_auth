import express from "express";
import cors from 'cors';
import morgan from 'morgan';
import connect from "./database/conn.js";

const app = express();


// middleware
app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));
app.disable('x-powered-by');  //less hacker will know about stack


const port = 8080;


// HTTP GET REQ
app.get('/', (req, res) => {
    res.status(201).json("Home GET Request");
});

// start server only when we have valid connection

connect().then(() => {
    try {
        app.listen(port, () => {
            console.log(`Server connected to http://localhost:${port}`);
        })
    } catch (error) {
        console.log("Can not connect to the server");
    }
}).catch((error) => {
    console.log("Invalid database connection...")
})







