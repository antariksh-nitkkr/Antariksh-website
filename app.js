const path = require('path');

const express = require("express");
// const bodyParser = require('body-parser');

// const errorController = require('./controllers/error')

const app = express();

app.set('view engine','ejs');
app.set('views', 'views');

// const adminRoutes = require('./routes/admin');

app.use(express.static(path.join(__dirname,'public')));

app.get('/', (req, res, next) =>{
	console.log("working");
	res.render('index');
});

// app.use(errorController.get404);

app.listen(3000);