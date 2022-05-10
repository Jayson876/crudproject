const express = require("express")
const router = express.Router()
const mysqlConnection = require('../database')


router.get("/", (req, res) =>{
    
    mysqlConnection.query("SELECT * FROM crudproject.notes", (err, rows, fields) =>{
        if(!err)
        {
            res.render("../views/notes.ejs", {data: rows})
        }
        else
        {
            console.log(err);
        }
    })
   })


    router.get("/:id", (req, res) =>{
    mysqlConnection.query("SELECT * FROM crudproject.notes WHERE id = ?", [req.params.id], (err, rows, fields) =>{
        if(!err)
        {
            res.render("../views/notes.ejs", {data: rows})
        }
        else
        {
            console.log(err);
        }
    })
   })

    router.get("/:id", (req, res) =>{
    mysqlConnection.query("SELECT * FROM crudproject.notes WHERE id = ?", [req.params.id], (err, rows, fields) =>{
        if(!err)
        {
            res.render("../views/notes.ejs", {data: rows})
        }
        else
        {
            console.log(err);
        }
    })
   })

    router.get("/:id/delete", (req, res) =>{
    mysqlConnection.query('DELETE FROM crudproject.notes WHERE Id='+ req.params.id, (err, rows, fields) =>{
        if(!err)
        {
            
            res.redirect('/notes')
        }
        else
        {
            console.log(err);
        }
    })
   })


   router.post('/add', function(req, res) {
        
    var sql = "INSERT INTO crudproject.notes (`proj_id`, `notes`, `active_dt`) VALUES ('" + req.body.project_id + "', '" + req.body.notes + "', '" + req.body.active_dt + "')"
    
    mysqlConnection.query(sql, (err, rows, fields) =>{
        if(!err)
        {
            res.redirect('/notes')
            
        }
        else
        {
            console.log(err);
        }
    })
}); 

router.get("/edit/:id", (req, res) =>{
    mysqlConnection.query('SELECT * FROM crudproject.notes WHERE Id='+ req.params.id, (err, rows, fields) =>{
        if(!err)
        {
            res.render("../views/notes-edit.ejs", {data: rows})
        }
        else
        {
            console.log(err);
        }
    })
   })  

   router.post('/edit/:id', function(req, res) {
        
        var sql = "UPDATE crudproject.notes SET proj_id ='" + req.body.project_id + 
        "', notes ='" + req.body.notes + 
        "', active_dt ='" +  req.body.active_dt + 
        "' WHERE id = " + req.body.id
        mysqlConnection.query(sql, (err, rows, fields) =>{
            if(!err)
            {
                res.redirect('/notes')
                
            }
            else
            {
                console.log(err);
            }
        })
  }); 


   module.exports = router