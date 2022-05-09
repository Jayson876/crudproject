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
    mysqlConnection.query("SELECT * FROM crudproject.projects WHERE id = ?", [req.params.id], (err, rows, fields) =>{
        if(!err)
        {
            res.render("../views/projects.ejs", {data: rows})
        }
        else
        {
            console.log(err);
        }
    })
   })

    router.get("/:id/delete", (req, res) =>{
    mysqlConnection.query('DELETE FROM crudproject.projects WHERE Id='+ req.params.id, (err, rows, fields) =>{
        if(!err)
        {
            
            res.redirect('/projects')
        }
        else
        {
            console.log(err);
        }
    })
   })


   router.post('/add', function(req, res) {
        
        var sql = "INSERT INTO crudproject.projects (`proj_title`, `proj_desc`, `proj_strt`, `proj_due`) VALUES ('" + req.body.project_title + "', '" + req.body.project_desc + "', '" + req.body.project_strt + "', '" + req.body.project_due + "')"
        mysqlConnection.query(sql, (err, rows, fields) =>{
            if(!err)
            {
                res.redirect('/projects')
                
            }
            else
            {
                console.log(err);
            }
        })
  }); 

  router.get("/edit/:id", (req, res) =>{
    mysqlConnection.query('SELECT * FROM crudproject.projects WHERE Id='+ req.params.id, (err, rows, fields) =>{
        if(!err)
        {
            res.render("../views/projects-edit.ejs", {data: rows})
        }
        else
        {
            console.log(err);
        }
    })
   })  

   router.post('/edit/:id', function(req, res) {
        
        var sql = "UPDATE crudproject.projects SET proj_title ='" + req.body.project_title + 
        "', proj_desc ='" + req.body.project_desc + 
        "', proj_strt ='" +  req.body.project_strt + 
        "', proj_due ='" + req.body.project_due + 
        "' WHERE id = " + req.body.id
        mysqlConnection.query(sql, (err, rows, fields) =>{
            if(!err)
            {
                res.redirect('/projects')
                
            }
            else
            {
                console.log(err);
            }
        })
  }); 


   module.exports = router