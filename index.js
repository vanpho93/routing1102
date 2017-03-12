let express = require('express');
let app = express();
app.set('view engine', 'ejs');
app.set('views', './views');
let { uploadSingle, uploadArray } = require('./upload.js');
app.use(express.static('public'));
app.listen(3000, () => console.log('Server started'));
let parser = require('body-parser').urlencoded({extended: false});

let { Tin } = require('./Tin.js');

app.get('/', require('./controllers/indexPage.js'));

app.use('/home', require('./routes/home.js'));

app.get('/admin', require('./controllers/admin.js'));

app.get('/admin/news', (req, res) => res.render('add'));

app.post('/admin/news', parser, require('./controllers/addNews.js'));

app.get('/admin/xoa/:index', require('./controllers/remove'));

app.get('/admin/sua/:index', require('./controllers/getUpdatePage.js'));

//req.file.filename

app.post('/admin/sua', require('./controllers/update.js'));

// app.get('/array', (req, res) => res.render('arrayfile'));

// app.post('/array', (req, res) => {
//   uploadArray('avatar')(req, res, err => {
//     res.send(req.files);
//   });
// });