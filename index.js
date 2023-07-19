const express = require('express')
const cookieParser = require('cookie-parser')

//setup express app
const app = express()

// let’s you use the cookieParser in your application
app.use(cookieParser());

//set a simple for homepage route
app.get('/', (req, res) => {
    res.cookie('flag', 'EHMhWYWF1RXBvgxYxpov3H7fKzniP31M6TdsdGSct').sendFile(__dirname + "/static/index.html"); //Sets name = express

});

//server listening to port 8000
app.listen(8000, () => console.log('The server is running port 8000...'));

