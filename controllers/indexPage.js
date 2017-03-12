let { queryDB } = require('../db.js');

module.exports = (req, res) => {
  queryDB('SELECT * FROM "News"', (err, result) => {
    if(err) return res.send(err + '', err);
      res.render('index', {
        user: 'KhoaPham',
        mangTin: result.rows
      });
  });
}