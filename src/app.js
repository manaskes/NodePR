const express = require("express")
const hbs = require('hbs')
const app = express()
const path = require('path')
const port = process.env.PORT || 3000


//public static path
 
const static_path =path.join(__dirname,'../public')
const template_path =path.join(__dirname,'../templates/views')
const partials_path =path.join(__dirname,'../templates/partials')



app.set('view engine', 'hbs');
app.set('views',template_path)
hbs.registerPartials(partials_path)

app.use(express.static(static_path)) 


//Routing
app.get("/",(req,res)=>{
    res.render('index.hbs')
})

app.get("/link",(req,res)=>{
    res.render('links.hbs')
})

app.get("/about",(req,res)=>{
    res.render('about.hbs')
})

app.get("/weather",(req,res)=>{
    res.render('weather')
})

app.get("*",(req,res)=>{
    res.render('404error.hbs',{
        errMsg:"Oops! Page Not Found"
    })
})



app.listen(port,()=>{
    console.log(`localhost is running in port ${port}`)
})