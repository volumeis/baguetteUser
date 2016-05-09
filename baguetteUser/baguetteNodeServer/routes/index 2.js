var express = require('express');
var router = express.Router();

/* GET home page. */
/* get : 로로 들어왔을때 . app = router 길을 찾는다. 연결해주는것*/
router.get('/', function(req, res, next) {
    
    //views안의 index.jade파일을 렌더링 하는 것 
    res.render('index', { title: 'Express' });
    
});

module.exports = router;


router.get('/template',function(req,res){
   res.render('index')        
});
