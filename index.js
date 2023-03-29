// install express and needle first
// then import express and needle ( npm i express needle on terminal )
import express from 'express';
import router from './router.js';

// instantiate express library
const app = express();
app.use(express.urlencoded({extended: true}))
app.use(express.json());

console.log("Server now running on port 3000");
app.listen(3000);
// create a router file
router(app); 