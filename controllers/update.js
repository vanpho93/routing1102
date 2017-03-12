let {updateNews} = require('../db.js');
let {uploadSingle} = require('../upload.js');
let { Tin } = require('../Tin.js');

module.exports = (req, res) => {
  uploadSingle('avatar')(req, res, err => {
    if(err) return res.send(err);
    let {title, desc, date, index} = req.body;
    let image = req.file?req.file.filename:req.body.old;
    let tin = new Tin(title, date, desc, image);
    updateNews(index, tin, (err, result) => {
      if(err) return res.send(err);
      res.redirect('/admin');
    });
  });
}