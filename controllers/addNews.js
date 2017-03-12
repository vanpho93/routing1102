const { uploadSingle } = require('../upload');
const { addNews } = require('../db');
const { Tin } = require('../Tin');

module.exports = (req, res) => {
  uploadSingle('avatar')(req, res, () => {
    const { title, desc, date } = req.body;
    const image = req.file ? req.file.filename : '1.png';
    const tin = new Tin(title, date, desc, image);
    addNews(tin, (err) => {
      if (err) return res.send(`${err} `);
      res.redirect('/admin');
    });
  });
};
