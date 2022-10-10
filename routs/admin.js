const { application } = require('express')
const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
require('../models/Categorie')
require('../models/Post')
const Categorie = mongoose.model('categories')
const Post = mongoose.model('posts')

router.get("/",(req,res)=>{     
    res.render('admin/index_admin')
})
//rotas das postagens
router.get("/posts",(req,res)=>{     
    res.render('admin/posts')
})
router.get("/posts/add_posts",(req,res)=>{     
    res.render('admin/add_posts')
})
router.post("/posts/new_post",(req,res)=>{
    const novaPostagem = {
        title_post: req.body.title_post,
        text_post: req.body.text_post
    }
    new Post(novaPostagem).save().then(()=>{
        console.log('Postagem gravado com sucesso')
    }).catch((err)=>{
        console.log('Falha na gravacao na DB'+err)
    })
})
//Rotas das categorias 
router.get("/categories",(req,res)=>{     
    res.render('admin/categories')
})
router.get("/categories/add_categories",(req,res)=>{     
    res.render('admin/add_categories')
})
router.post("/categories/new_categorie",(req,res)=>{
    const novaCategoria = {
        name_categorie: req.body.name_categorie,
        slug: req.body.slug
    }
    new Categorie(novaCategoria).save().then(()=>{
        console.log('Nova categoria Gravada com sucesso')
       
    }).catch((err)=>{
        console.log('Falha na gravacao na DB'+err)
    })
    
    res.redirect('/admin/categories')
})

module.exports= router