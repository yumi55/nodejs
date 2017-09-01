var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('re111');
});

router.get('/hh', function(req, res, next) {
  res.send('hh is sb');
});

module.exports = router;
