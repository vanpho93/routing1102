let express = require('express');
let router = express.Router();
let parser = require('body-parser').urlencoded({extended: false});

router.get('/show', (req, res) => res.render('index'));
router.post('/show', parser, (req, res) => {
  res.send(req.body);
});

module.exports = router;
