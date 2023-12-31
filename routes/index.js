var express = require('express');
var router = express.Router();

const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
let date = new Date().toLocaleString({timeZone: userTimeZone})

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: date
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: date
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', 
  { 
    title: 'Mini Message Board',
    messages: messages 
  });
});

router.get('/new', function(req, res, next) {
  res.render('form', {})
})

router.post('/new', function(req, res, next) {
  messages.push({text: req.body.messageText, user: req.body.userName, added: date})
  res.redirect('/')
})

module.exports = router;