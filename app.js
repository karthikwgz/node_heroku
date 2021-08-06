var express = require('express')
require('dotenv').config();
var app = express()


app.get("/",(req,res) =>{
	res.send("hello");
})

app.listen(process.env.PORT || 3000)
