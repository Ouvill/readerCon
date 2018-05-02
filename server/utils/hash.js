const crypto = require("crypto");

// var algorithm = 'sha256';
const algorithm = 'sha512';
const secret = process.env.SECRET_KEY;
const output_encoding = 'hex';
// var secret = 'key';

const hash = (text) => {
    var hmac = crypto.createHmac(algorithm, secret);
    hmac.update(text, 'utf8');
    return hmac.digest(output_encoding);
}

module.exports = hash;
