const express = require('express');
const router = express.Router();
const monggose = require('mongoose');
const catchErrors = require('../middlewares/catchErrors')

const Product = require ('../models/Producto');

//post
router.post('/products', (req, res, next) => {
  Product.create( {
   nombre: req.body.nombre,
   costo:req.body.costo
  })

  .then(response => {
    res.json(response);
  })
  .catch(err => {
    res.json(err);
  })
});//

///get

router.get('/ver', (req,res,next) => {
  Product.find()
  .then(response => {
    res.json(response);
  })
  .catch(err => {
    res.json(err);
  })
})


module.exports = router;
