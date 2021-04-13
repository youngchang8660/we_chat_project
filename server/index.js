require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const { SERVER_PORT, SESSION_SECRET } = process.env;
const port = SERVER_PORT || 3007;
const pool = require("./db");
const bcrypt = require('bcryptjs');
const session = require('express-session');


app.use(cors());
app.use(express.json());
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {maxAge: 1000 * 60 * 60}
}))

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
    let { firstName, lastName, email, password, confirmPassword } = req.body;

    if(!firstName || !lastName || !email || !password || !confirmPassword) {
        return res.status(400).send('All fields are required');
    }

    if(password !== confirmPassword) {
        return res.status(400).send('Password does not match')
    }

    let checkUserInUse = await pool.query(`SELECT * FROM we_chat_user WHERE email = '${email}';`);
    // console.log(checkUserInUse['rows'].length)
    if(checkUserInUse['rows'].length > 0) {
        return res.status(400).send('Email is already taken');
    }

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    let registeredUser = await pool.query(`INSERT INTO we_chat_user (first_name, last_name, email, password, confirm_password) 
                VALUES ('${firstName}', '${lastName}', '${email}', '${hash}', '${hash}') RETURNING first_name, last_name, email;`);
    
    // console.log(registeredUser['rows'])
    let sessionUser = {...registeredUser['rows']}
    console.log('sessionUser', sessionUser)
    req.session.user = sessionUser
    console.log('req.session.user', req.session.user)

    return res.status(201).send(req.session.user);
})

// user login
app.post('/user/login', async(req, res) => {
    let { email, password } = req.body;
    console.log(email, password)
    let validEmail = await pool.query(`SELECT * FROM we_chat_user WHERE email = '${email}';`);
    // console.log(validEmail['rows'][0].password)
    if(!validEmail['rows'][0]) {
        return res.status(401).send('Incorrect email or password')
    }

    if(validEmail['rows'][0]) {
        let validPassword = await bcrypt.compare(password, validEmail['rows'][0].password)
        if(!validPassword) {
            return res.status(400).send('Incorrect email or password');
        }
        delete validEmail['rows'][0].password;
        delete validEmail['rows'][0].confirm_password;
        let sessionUser = {...validEmail['rows'][0]}
        req.session.user = sessionUser
        return res.status(200).send(req.session.user)
    }
})

app.listen(port, () => {
  console.log(`This app is running on port ${port}`);
});
