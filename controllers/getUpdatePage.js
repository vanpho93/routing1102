const { getNewsById } = require('../db');
const { Tin } = require('../Tin');

module.exports = (req, res) => {
  const { index } = req.params;
  getNewsById(index, (err, result) => {
    if (err || result.rows.length === 0) return res.send(`${err} `);
    const { title, desc, image, date } = result.rows[0];
    const tin = new Tin(title, date, desc, image);
    res.render('update', { tin, index });
  });
};
