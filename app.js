const express = require('express')
const handlebars = require('express-handlebars')
const bodyparser = require('body-parser')
const path = require('path')
//const mongoose = require('mongoose')
const app = express()
const admin = require('./routs/admin')
const { default: mongoose, mongo } = require('mongoose')
//Config
    //Template Engine
        
        app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))
        app.set('view engine', 'handlebars')
    //Body Parser
        app.use(express.urlencoded({extended: true}))
        app.use(express.json()) 
    //Mongoose
        mongoose.Promise = global.Promise
        mongoose.connect('mongodb://localhost/blogapp').then(()=>{
                    console.log('conxão com DB realizada consucesso')
                }).catch((err)=>{
                    console.log('falha na conexao com o DB'+err)    
                })
    //Public
        app.use(express.static(path.join(__dirname,'public')))

//Rotas
    app.use('/admin',admin)
    app.get('/',(req,res)=>{
        res.render('admin/index')
    })
    

//Outros
    const PORT = 9092
    app.listen(PORT,()=>{
        console.log('servidor rodando em http://localhost:'+PORT)
    })