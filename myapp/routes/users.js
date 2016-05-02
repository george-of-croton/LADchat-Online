var express = require('express');
var router = express.Router();
var fs = require('fs')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

var actual = {}

router.post('/', function(req, res, next) {
  fs.readFile('./users.json', 'utf8', (err, data) => {
    if(err)console.log(err, "error")
    data = JSON.parse(data)
    console.log(typeof data)
    actual.username = data.username
    actual.password = data.password
    var user = { username: req.body.username,
                 password: req.body.password
                }
    comparify(data, user, res)
  })
})


function comparify(data, username, res){
  console.log("fuuuck")
  data.forEach((i) => {
  console.log(actual)
  console.log(i.username,  username.username, "these are usernames")
  console.log(i.password, username.password, "these are passwords")
  if(i.username == username.username && i.password == username.password ){
    console.log("there's a snake in my boot!")
    res.redirect('/')
    }
  })
}

module.exports = router;
