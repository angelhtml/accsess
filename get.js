const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const port = 3000

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

mongoose.connect('mongodb://localhost/accsess')
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});
const usersSchema = {
    username: String,
    password: Number
}
const users = mongoose.model("users", usersSchema)

app.post("/data", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const newUser = new users({
        username,
        password
    });
    newUser.save();
    res.send('your are registered')  
    });

app.listen(port, function(){
    console.log(`express server is running on port ${port}`);
}) 