var express = require('express');
var router = express.Router();
var db = require('../models')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/register', function(req, res, next) {
  res.render('register2')
})

router.post('/register/create', function(req, res, next) {
  db.User.create(req.body).then(function(data) {
    res.redirect('/')
  }).catch(function(err) {
    res.redirect('/register')
    console.log(err.message);
  })
})

router.get('/admin', function(req, res, next) {
  db.User.findAll().then(function(data) {
    res.render('admin', {data_admin : data})
  })
})

// get semua data
router.get('/admin/edit/:id', function(req, res, next) {
  db.User.findById(req.params.id).then(function(data) {
    res.render('edit', {data_admin : data})
  })
})
// update semua data
router.post('/admin/edit/:id', function(req, res, next) {
  db.User.findById(req.params.id).then(function(datas) {
    datas.update({
      username : req.body.username,
      email : req.body.email,
      password : req.body.password,
      role : req.body.role
    })
    res.redirect('/admin')
  })
})

module.exports = router;
