var express = require('express');
var router = express.Router();
var interfaces = require('./controller/interface');


// Add interface Routes
router.use(interfaces)

module.exports = router;
