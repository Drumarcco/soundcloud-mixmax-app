var express = require('express'),
    cors = require('cors'),
    app = express();

require('dotenv').config();

var corsOptions = {
    origin: /^[^.\s]+\.mixmax\.com$/,
    credentials: true
};

app.get('/resolver', cors(corsOptions), require('./api/resolver'));

if (process.env.NODE_ENV === 'production') {
    app.listen(process.env.PORT || 8000);
} else {
    var pem = require('pem');
    var https = require('https');
    pem.createCertificate(
        { days: 1, selfSigned: true },
        (err, keys) => {
            if (err) throw err;

            https.createServer({
               key: keys.serviceKey,
               cert: keys.certificate 
            }, app).listen(process.env.PORT || 8000);
        });
}

module.exports = app;
