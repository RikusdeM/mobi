// require('dotenv').config(); // this loads the defined variables from .env
import {config} from "dotenv";

const conf = {
    port: process.env.PORT,
    token: process.env.TOKEN
};

// console.log(process.env.PORT)

export default conf