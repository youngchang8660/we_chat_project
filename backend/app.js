const express = require('express');
const app = express();
const port = 3943;
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello World");
})

app.listen(port, () => {
    console.log(`This app is running on port ${port}`)
})