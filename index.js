const express = require('express');

const app = express();
app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static('public'));
app.listen(3000, () => console.log('Server started'));
const parser = require('body-parser').urlencoded({ extended: false });

app.get('/', require('./controllers/indexPage'));

app.use('/home', require('./routes/home'));

app.get('/admin', require('./controllers/admin'));

app.get('/admin/news', (req, res) => res.render('add'));

app.post('/admin/news', parser, require('./controllers/addNews'));

app.get('/admin/xoa/:index', require('./controllers/remove'));

app.get('/admin/sua/:index', require('./controllers/getUpdatePage'));

//req.file.filename

app.post('/admin/sua', require('./controllers/update'));

// app.get('/array', (req, res) => res.render('arrayfile'));

// app.post('/array', (req, res) => {
//   uploadArray('avatar')(req, res, err => {
//     res.send(req.files);
//   });
// });
