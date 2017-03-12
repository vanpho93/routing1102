let pg = require('pg');

let config = {
  user: 'postgres',
  database: 'NODE1102',
  password: 'khoapham',
  host: 'localhost',
  port: 5432,
  max: 5,
  idleTimeoutMillis: 10000
}

let pool = new pg.Pool(config);

// pool.connect((err, client, done) => {
//     if(err) return console.log(err + '');
//     client.query('SELECT * FROM "News"', (err, result) => {
//         done(err);
//         if(err) return console.log(err + '');
//         console.log(result.rows);
//     });
// });

function queryDB(sql, cb) {
    pool.connect((err, client, done) => {
        if(err) return cb(err + '');
        client.query(sql, (err, result) => {
            done(err);
            if(err) return cb(err + '');
            cb(undefined, result);
        });
    });
}

function removeNews(id, cb) {
    let sql = `DELETE FROM "News" WHERE id = ${id}`
    queryDB(sql, cb);
}

function addNews(tin, cb) {
    let {title, desc, image, date} = tin;
    let sql = `INSERT INTO public."News"(
	title, "desc", image, date)
	VALUES ('${title}', '${desc}', '${image}','${date}')`;
    queryDB(sql, cb);
}

function updateNews(id, tin, cb) {
    let {title, desc, image, date} = tin;
    let sql = `UPDATE public."News"
	SET title='${title}', "desc"='${desc}', image='${image}', date='${date}'
	WHERE id = ${id}`;
    queryDB(sql, cb);
}

function getNewsById(id, cb) {
    let sql = `SELECT id, title, "desc", image, date
	FROM public."News" WHERE id = ${id}`;
    queryDB(sql, cb);
}

// queryDB('SELECT * FROM "News"', result => console.log(result));
module.exports = { 
    queryDB, 
    removeNews, 
    addNews, 
    updateNews, 
    getNewsById 
};
