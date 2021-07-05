require('dotenv').config(); // this loads the defined variables from .env

const config = {
    port: process.env.PORT,
    token: process.env.TOKEN
};

// console.log(process.env.PORT)

export default config