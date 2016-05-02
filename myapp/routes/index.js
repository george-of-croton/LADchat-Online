var express = require('express');
var router = express.Router();
var fs = require('fs')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res, next){
    fs.readFile('./users.json', 'utf8', (err, data, callback) => {
    if(err)console.log(err, "error")
      data = JSON.parse(data)
      console.log(typeof data, "this is typeof data")
      data.push(req.body)
      fs.writeFile('users.json', JSON.stringify(data), (err, callback) => {
        if(err)console.log(err, "shit's fucked!")
    })
  })
})


module.exports = router;
