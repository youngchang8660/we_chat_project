require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const { SERVER_PORT } = process.env;
const port = SERVER_PORT || 3007;
const pool = require("./db");
const bcrypt = require('bcryptjs');
const saltRounds = 10;

app.use(cors());
app.use(express.json());

/******************* User *************************/

// get All Users
app.get("/user", async(req, res) => {
    try {
        const allUsers = await pool.query("SELECT * FROM we_chat_user;");
        res.send(allUsers.rows).status(200);
    } catch(err) {
        console.error('Failed to fetch users data', err.message)
    }
})

// user registration
app.post("/user/registration", async(req, res) => {
    try {
        const { first_name, last_name, email, password, confirm_password } = req.body;
        const emailCheck = await pool.query("SELECT * FROM we_chat_user WHERE email = $1;");
        if(emailCheck[0]) {
            return res.send(400).send("Email is already in use");
        } 
        if(password == confirm_password) {
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(password, salt);
            let registeredUser = await pool.query("INSERT INTO we_chat_user (first_name, last_name, email, password, confirm_password) values($1, $2, $3, $4, $5) returning first_name, last_name, email;");
            
        }
        else {
            return res.send(400).send("Password does not match");
        }
    } catch(err) {
        console.error('Error to register new User', err.message)
    }
})

app.listen(port, () => {
  console.log(`This app is running on port ${port}`);
});
