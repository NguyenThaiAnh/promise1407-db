const request = require('request');

function cong(soA, soB, cb) {
    const isTypeOk = typeof soA !== 'number' || typeof soB !== 'number';
    if (isTypeOk) return cb(new Error('Type error'));
    const url = `http://localhost:3000/tinh/CONG/${soA}/${soB}`;
    request(url, (err, response, data) => {
        cb(err, data);
    });
}

function nhan(soA, soB, cb) {
    const isTypeOk = typeof soA !== 'number' || typeof soB !== 'number';
    if (isTypeOk) return cb(new Error('Type error'));
    const url = `http://localhost:3000/tinh/NHAN/${soA}/${soB}`;
    request(url, (err, response, data) => {
        cb(err, data);
    });
}

function chia(soA, soB, cb) {
    const isTypeOk = typeof soA !== 'number' || typeof soB !== 'number';
    if (isTypeOk) return cb(new Error('Type error'));
    if (soB === 0) return cb(new Error('Divide by 0'));
    const url = `http://localhost:3000/tinh/CHIA/${soA}/${soB}`;
    request(url, (err, response, data) => {
        cb(err, data);
    });
}

function tinhDienTicHinhThang(a, b, h, cb) {
    cong(a, b, (errCong, tong) => {
        if (errCong) return cb(errCong);
        nhan(+tong, h, (errNhan, tich) => {
            if (errNhan) return cb(errNhan);
            chia(+tich, 2, (errChia, ketQua) => {
                if (errChia) return cb(errChia);
                cb(null, ketQua);
            });
        });
    });
}

tinhDienTicHinhThang(10, 5, 2, (err, square) => {
    console.log(err, square);
});