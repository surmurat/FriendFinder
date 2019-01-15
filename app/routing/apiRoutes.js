const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false });

router.get('/', function(req, res){
console.log('friends api get method');
});

router.post('/', urlencodedParser, function(req, res){
if (!req.body) return res.sendStatus(400);

});

module.exports = router;



