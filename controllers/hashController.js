const crypto = require('crypto');

exports.md5Hash = function(load) {
    load = crypto.createHash('md5').update(load).digest('hex');
    return load;
}