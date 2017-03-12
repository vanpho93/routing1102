const { queryDB } = require('../db');

module.exports = (req, res) => {
  queryDB('SELECT * FROM "News"', (err, result) => {
    if (err) return res.send(`${err} `, err);
      res.render('admin', { mangTin: result.rows });
  });
  // res.render('admin', {mangTin})
};
