require("dotenv").config();
let express = require('express');
let app = express();
let sequelize = require('./db');

let journal = require('./controllers/journalcontroller')
let about = require('./controllers/journalcontroller')
let user = require('./controllers/usercontroller')
let calc = require("./controllers/calculatorcontroller")

// app.use("/test", function(req, res){
//     res.send("This is a message from the test endpoint on the server!");
// });

// app.use('/journal', journal)

sequelize.sync();



app.use(express.json());

//EXPOSED ROUTE
app.use('/user', user)

//PROTECTED ROUTE

app.use('/journal', journal)
app.use('/journal/about', about)

app.use('/calculator', calc)


app.listen(3000,function(){console.log('App is listening on port 3000')});

//localhost:3000

//localhost:3000/test

