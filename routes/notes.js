const express = require("express")
const router = express.Router()

    router.get("/", (req, res) =>{
            res.render("../views/notes.ejs")
   })
   
    router.get("/add", (req, res) =>{
       res.send("NotesAdd")
   })

   module.exports = router