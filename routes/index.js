var express = require('express');
var router = express.Router();
const userController=require('../controllers/userController')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//login signup and sessions

router.get('/login',userController.login)
router.post('/login',userController.postLogin)










module.exports = router;
