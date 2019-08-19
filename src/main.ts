import {App} from "./app";
require("dotenv").config();



const server = new App();

server.app.listen(process.env.pport,()=>{
    console.log(`listen on port ${process.env.pport}`);
});