var request = require('request');
require('../utils/string.prototype');

module.exports = function(req, res) {
    var url = req.query.url.hasHttpPrefix() ? req.query.url : 'https://' + req.query.url;

    var soundcloudUrl = 'http://soundcloud.com/oembed?format=json&url=' + encodeURIComponent(url);
    request({url: soundcloudUrl, json: true}, (error, response, body) => { 
        res.send({body: body.html});
        
    });
};
