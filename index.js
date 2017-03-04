let express = require('express');
let app = express();
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));
app.listen(3000, () => console.log('Server started'));
let parser = require('body-parser').urlencoded({extended: false});

let {mangTin, Tin} = require('./Tin.js');

app.get('/', (req, res) => res.render('index',
  {
    user: 'KhoaPham',
    mangTin: mangTin
  }
));

app.use('/home', require('./routes/home.js'));

app.get('/admin', (req, res) => res.render('admin', {mangTin}));

app.get('/admin/news', (req, res) => res.render('add'));

app.post('/admin/news', parser, (req, res) => {
  let {title, desc, date, image} = req.body;
  let tin = new Tin(title, date, desc, image);
  mangTin.push(tin);
  res.redirect('/admin');
});

app.get('/admin/xoa/:index', (req, res) => {
  let {index} = req.params;
  mangTin.splice(index, 1);
  res.redirect('/admin');
});

app.get('/admin/sua/:index', (req, res) => {
  let {index} = req.params;
  res.render('update', {tin: mangTin[index], index});
});