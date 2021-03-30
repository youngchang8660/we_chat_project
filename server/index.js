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
app.post('/user/register', async(req, res) => {
    let { first_name, last_name, email, password, confirm_password } = req.body;
    console.log(first_name, last_name, email, password, confirm_password)

    if(!first_name || !last_name || !email || !password || !confirm_password) {
        res.send('Please fill out all information')
    }
})

app.listen(port, () => {
  console.log(`This app is running on port ${port}`);
});
