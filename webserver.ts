import {User} from './user'
import config from "./config";

const express = require('express'),
    bodyParser = require('body-parser');

const GracefulShutdownManager = require('http-graceful-shutdown')


export const app = express();

app.use(bodyParser.json());

const port = config.port

export const server = app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

const shutdownManager = new GracefulShutdownManager(server);

export function shutDown() {
    console.log('Received kill signal, shutting down gracefully');
    shutdownManager.terminate(() => {
        console.log('Server is gracefully terminated');
    });
}
