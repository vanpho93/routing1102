let { getNewsById } = require('../db.js');
let { Tin } = require('../Tin.js');

module.exports = (req, res) => {
  let {index} = req.params;
  getNewsById(index, (err, result) => {
    if(err || result.rows.length == 0 ) return res.send(err + '');
    let {title, desc, image, date} = result.rows[0];
    let tin = new Tin(title, date, desc, image);
    res.render('update', {tin, index});
  });
}