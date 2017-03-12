const { updateNews } = require('../db');
const { uploadSingle } = require('../upload');
const { Tin } = require('../Tin');

module.exports = (req, res) => {
  uploadSingle('avatar')(req, res, err => {
    if (err) return res.send(err);
    const { title, desc, date, index } = req.body;
    const image = req.file ? req.file.filename : req.body.old;
    const tin = new Tin(title, date, desc, image);
    updateNews(index, tin, (err2) => {
      if (err2) return res.send(err2);
      res.redirect('/admin');
    });
  });
};
