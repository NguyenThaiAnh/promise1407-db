const pg = require('pg');

const pool = new pg.Pool({
    user: 'postgres',
    password: '123',
    database: 'Node1407',
    host: 'localhost',
    port: 5432,
    max: 20
});

// function queryDb(sql, arrayData, cb) {
//     pool.connect((err, client, done) => {
//         if (err) return console.log(err.message);
//         client.query(sql, arrayData, (errQuery, result) => {
//             done(errQuery);
//             // return result;
//             cb(errQuery, result);
//         });
//     });
// }

function queryDb(sql, arrayData) {
    return new Promise((resolve, reject) => {
        pool.connect((err, client, done) => {
            if (err) return reject(err);
            client.query(sql, arrayData, (errQuery, result) => {
                done(errQuery);
                // return result;
                resolve(result);
            });
        });
    })
}

// module.exports = queryDb;
queryDb('SELECT * FROM "Product"', [])
.then(data => console.log(data))
.catch(err=> console.log(err))

// module.exports = queryDb;