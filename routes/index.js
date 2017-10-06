var express = require('express');
var router = express.Router();
var multer  = require('multer')
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now()+'.jpg')
  }
})
var upload = multer({ storage: storage })
var path = require('path');
/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(__dirname)
  res.sendFile(path.join(__dirname, 'index.html'));
});
router.get('/2', function(req, res, next) {
  console.log(__dirname)
  res.sendFile(path.join(__dirname, 'index2.html'));
});
router.post('/upload',upload.any(), (req,res) =>{
  res.end('ok')
})
module.exports = router;
