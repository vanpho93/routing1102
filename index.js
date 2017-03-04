let express = require('express');
let app = express();
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));
app.listen(3000, () => console.log('Server started'));

let mangTin = require('./Tin.js');

app.get('/', (req, res) => res.render('index',
  {
    user: 'KhoaPham',
    mangTin: mangTin
  }
));

app.use('/home', require('./routes/home.js'));

app.get('/admin', (req, res) => res.render('admin', {mangTin}));