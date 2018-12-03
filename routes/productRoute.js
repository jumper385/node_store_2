const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()

const Product = require('../models/products.model')

router.get('/', (req,res) => {
    Product.find()
        .then(products => res.json(products))
        .catch(error => res.json({error:error.message}))
})

router.post('/new', (req,res) => {
    let new_product = new Product({
        _id: new mongoose.Types.ObjectId,
        ...req.body
    })
    new_product.save()
        .then(success => res.json(success))
        .catch(error => res.json(error))
})

router.get('/search/:id',(req,res) => {
    Product.find({_id: req.params.id})
        .then(product => res.json(product))
        .catch(error => res.json({error: error.message}))
})

router.patch('/search/:id', (req,res) => {

    const updates = req.body

    Object.keys(req.body).map(key => {
        if(!req.body[key]) delete updates[key]
    })

    Product.updateOne({_id:req.params.id},req.body)
        .then(res.json({updates:updates}))
        .catch(error => res.json({error:error.message}))
})

router.delete('/search/:id',(req,res) => {
    Product.find({_id: req.params.id})
        .then(product => {
            if(product != []){
                Product.deleteOne({_id: req.params.id})
                    .then(confirmation => res.json(confirmation))
            } else res.json({error:'product not found'})
        })
        .catch(error => res.json({error:error.message}))
})

module.exports = router