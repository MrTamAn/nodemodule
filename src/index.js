// import { handlebars } from "express-handlebars";
const path = require('path');
const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const route = require('./routes');
const app = express();
const port = 3000;
const db = require('./config/db/index.js');

//connect to DB
db.connectDB();

//check logged
// app.use(morgan("combined"));
//static
app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.static(path.join(__dirname + "/public")));
// app.use(express.static("/public"));

//templet engine
app.engine('hbs', engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));
// console.log(__dirname);

//get static file

//hàm khởi tạo router
route(app);

//run servers
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
