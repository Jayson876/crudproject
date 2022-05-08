const mysql = require('mysql2')

var mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '=Kidjayceo1!',
    database: 'crudproject'
})

mysqlConnection.connect((err) =>{
    if(!err)
    {
        console.log("Connected")
    }
    else
    {
        console.log("Connection Failed")
    }
})

module.exports = mysqlConnection