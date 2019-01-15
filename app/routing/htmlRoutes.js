const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/survey', function(req, res){
    res.sendFile(path.join(path.dirname(process.mainModule.filename), '/app/public/survey.html'));

});

router.get('/', function(req, res){
    res.sendFile(path.join(path.dirname(process.mainModule.filename), '/app/public/home.html'));

});


module.exports = router;