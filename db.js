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

// queryDB('SELECT * FROM "News"', result => console.log(result));
module.exports = queryDB;