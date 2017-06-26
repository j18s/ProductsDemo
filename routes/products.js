var express = require('express');
var router = express.Router();
var Products = require('../models/Products');

/* GET home page. */
router.get('/', function (req, res, next) {
   console.log(req.query);
  Products.getAllProducts(function (err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  }, req.query.field, req.query.order);
});

router.post('/', function (req, res, next) {
  // console.log('i m here')
  Products.addProduct(req.body, function (err, rows) {
    if (err) {
      res.json(err);
    }
    else if(rows === undefined)
    {
        res.statusCode = 400;
        res.json('Validation failed: updated data is not valid');
    }
    else {
      res.json('Added product id:' + rows.insertId);
    }
  });
});

router.put('/:id', function (req, res, next) {
  // console.log('i m here')
  Products.updateProduct(req.params.id, req.body, function (err, rows) {
    if (err) {
      res.json(err);
    }
    else if(rows === undefined)
    {
        res.statusCode = 400;
        res.json('Validation failed: input data is not valid');
    }
    else {
      res.json('Updated product id:' + rows.affectedRows);
    }
  });
});

module.exports = router;
