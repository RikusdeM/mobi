import {User} from './user'
import config from "../config";

const express = require('express'),
    bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const port = config.port

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

export default app