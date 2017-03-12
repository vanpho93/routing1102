let { removeNews } = require('../db.js');
module.exports = (req, res) => {
  let {index} = req.params;
  removeNews(index, (err, result) => {
    if(err) res.send(err + '');
    res.redirect('/admin');
  });
}