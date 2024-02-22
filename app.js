import express from "express";
import cors from "cors";
import { serialized_agent, agent } from "./controllers/algo.js";
import pgp from 'pg-promise';
import fs from 'fs';
import util from 'util';
import { exec } from 'child_process';

const app = express()

app.use(express.json())

app.use(cors({ origin: "https://web-page-1-8td.pages.dev/", credentials: true }));

var allowCrossDomain = function (req, res, next) {
    // res.header('Access-Control-Allow-Origin', "*");
    // res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    // res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader(
        "Access-Control-Allow-Origin",
        "https://web-page-1-8td.pages.dev/"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS,CONNECT,TRACE"
    );
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Content-Type, Authorization, X-Content-Type-Options, Accept, X-Requested-With, Origin, Access-Control-Request-Method, Access-Control-Request-Headers"
    );
    res.setHeader("Access-Control-Allow-Credentials", true);
    res.setHeader("Access-Control-Allow-Private-Network", true);
    //  Firefox caps this at 24 hours (86400 seconds). Chromium (starting in v76) caps at 2 hours (7200 seconds). The default value is 5 seconds.
    res.setHeader("Access-Control-Max-Age", 7200);
    next();
}
app.use(allowCrossDomain);

const writeFileAsync = util.promisify(fs.writeFile);
const filePath = 'dist/src/assets/model.js';

setInterval(async () => {
    try {
        // Read the file content
        const newContent = `export const model = ${util.inspect(serialized_agent, { depth: null })};`;

        // Write the new content to the file using promise-based writeFile
        await writeFileAsync(filePath, newContent, 'utf8');

        // Execute the command after modifying the file
        const command = 'CLOUDFLARE_ACCOUNT_ID=175feb9970fba9d1708daac3b2c7494d npx wrangler pages publish dist --project-name=web-page-1-8td.pages.dev';
        exec(command, (execError, stdout, stderr) => {
            if (execError) {
                console.error(`Error executing command: ${execError.message}`);
                return;
            }
            if (stderr) {
                console.error(`stderr: ${stderr}`);
                return;
            }
            console.log(`stdout: ${stdout}`);
        });
    } catch (error) {
        console.error(`Error: ${error.message}`);
    }
}, 10000); // 10 seconds for testing, replace with 7200000 for 7200 seconds



console.log(serialized_agent)

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