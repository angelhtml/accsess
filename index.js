const express = require('express');
const axios = require('axios')
const app = express();
const cors = require('cors');
const mydata = require('./data/data.json')
const port = 4000

app.use(cors());
app.use(express.json());

setInterval(() =>{
axios({
    method: 'post',
    url: `http://localhost:3000/data`,
    data: mydata
    })
    .then(function (response) {
        console.log(response.data)
        console.log('data sent !')

    }).catch(function (error) {
    console.log(error);
    })
},2000);

app.listen(port, function(){
    console.log(`express server is running on port ${port}`);
})     