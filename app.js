import express from "express";
import cors from "cors";
import { serialized_agent, agent } from "./controllers/algo.js";
import pgp from 'pg-promise';
import fs from 'fs';
import util from 'util';
import { exec } from 'child_process';
import { simpleGit, CleanOptions } from 'simple-git';


import os from 'os'
console.log(os.platform())
const app = express()
const git = simpleGit();

app.use(express.json())

app.use(cors({ origin: "https://guileless-jalebi-432852.netlify.app/", credentials: true }));

var allowCrossDomain = function (req, res, next) {
    // res.header('Access-Control-Allow-Origin', "*");
    // res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    // res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader(
        "Access-Control-Allow-Origin",
        "https://guileless-jalebi-432852.netlify.app/"
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


// Set up GitLab credentials using a personal access token
var count = 0

// process.env.CLOUDFLARE_ACCOUNT_ID = '175feb9970fba9d1708daac3b2c7494d';
const ensureOriginConfigured = async () => {
    try {
        const gitlabToken = 'glpat-9VJpvWxkN5BqFNhvZzU7';
        git.addConfig('credential.helper', `store --file=.git/credentials`);
        git.addConfig('user.name', 'Suprith');
        git.addConfig('user.email', 'suprith7kg@gmail.com');
        fs.writeFileSync('.git/credentials', `https://oauth2:${gitlabToken}@gitlab.com`);
        const remotes = await git.getRemotes(true);
        const originExists = remotes.some(remote => remote.name === 'origin');

        if (!originExists) {
            await git.addRemote('origin', 'https://gitlab.com/freel11/lit-backend.git');
        }
        console.log(git.listConfig())
        console.log(remotes);
    } catch (error) {
        console.error(`Error ensuring 'origin' is configured: ${error.message}`);
    }
};

// Execute the command after modifying the file
// const command = 'npx wrangler pages deploy dist --project-name=web-page-1';
// const command = 'sudo netlify deploy --dir "dist" --auth $AUTH_TOKEN_NETLIFY --site $SITE_ID_NETLIFY --prod'
// exec(command, (execError, stdout, stderr) => {
setInterval(async () => {
    try {
        git.clean(CleanOptions.FORCE);
        await ensureOriginConfigured();
        const newContent = `export const model = ${util.inspect(serialized_agent, { depth: null })};`;

        await writeFileAsync(filePath, JSON.stringify(count), 'utf8');

        // const indexLockPath = '/opt/render/project/src/.git/index.lock';

        // // Remove the index lock file
        // await exec(`rm -f ${indexLockPath}`);

        console.log('hi', count);

        await git.add('./*');
        await git.commit(`Auto deploy changes in dist directory${count}`);
        await git.push('origin', 'main');
    } catch (error) {
        console.error(`Error: ${error.message}`);
    }
    count++;
}, 80000);

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