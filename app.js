import express from "express";
import cors from "cors";
import { serialized_agent, agent } from "./controllers/algo.js";
import pgp from 'pg-promise';

const app = express()

app.use(express.json())

app.use(cors({ origin: "https://guileless-jalebi-432852.netlify.app", credentials: true }));

var allowCrossDomain = function (req, res, next) {
    // res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}

app.use(allowCrossDomain);



// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
    res.json({ 'agent': serialized_agent });
});

app.post('/', (req, res) => {
    const [accept, recommendations] = req.body
    try {
        console.log(recommendations)
        agent.update(accept, recommendations)
        res.status(200).send("done")
    } catch (error) {
        res.status(500).send("Error in the post request")
    }

})

app.listen(5000, () => {
    console.log("Server initiated")
})

// const db = pgp('postgres://username:password@host:port/database')

// db.one('SELECT $1 AS value', 123)
//   .then((data) => {
//     console.log('DATA:', data.value)
//   })
//   .catch((error) => {
//     console.log('ERROR:', error)
//   })