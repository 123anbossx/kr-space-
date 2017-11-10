var express = require('express');
var user=require('../controller/register.js');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('register', { title: 'Express' });
});
 router.all('/register',user.register);
 router.post('/login',user.login);
module.exports = router;
