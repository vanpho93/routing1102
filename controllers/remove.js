const { removeNews } = require('../db');

module.exports = (req, res) => {
  const { index } = req.params;
  removeNews(index, (err) => {
    if (err) res.send(`${err} `);
    res.redirect('/admin');
  });
};
