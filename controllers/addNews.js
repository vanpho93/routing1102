let { uploadSingle } = require('../upload.js');
let { addNews } = require('../db.js');
let { Tin } = require('../Tin.js');

module.exports = (req, res) => {
  uploadSingle('avatar')(req, res, err => {
    let {title, desc, date } = req.body;
    let image = req.file ? req.file.filename : '1.png';
    let tin = new Tin(title, date, desc, image);
    addNews(tin, (err, result) => {
      if(err) return res.send(err+'');
      res.redirect('/admin');
    });
  });
}