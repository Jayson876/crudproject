const express = require("express")
const mysqlConnection = require('./database')
const app = express();
var bodyParser = require('body-parser');
var mysql = require('mysql');

app.use(bodyParser.urlencoded({
    extended: true
  }));
app.set("view engine", "ejs")


app.get("/", (req, res) => {
    res.render("index")
})

const projectRouter = require('./routes/projects')
const notesRouter = require('./routes/notes')

app.use('/projects', projectRouter)
app.use('/notes', notesRouter)
app.use( express.static( "public" ));

app.listen(3000)