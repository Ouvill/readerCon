var crypto = require("crypto");

var cipers = crypto.getCiphers();

var algorithm = 'aes-256-cbc';
var secret = process.env.SECRET_KEY;
var output_encoding = 'hex';


var aes = {
    // 暗号化
    cipher: function (plain_text) {
        var cipher = crypto.createCipher(algorithm, secret);
        var ciphered_text = cipher.update(plain_text, 'utf8', output_encoding);
        ciphered_text += cipher.final(output_encoding);
        return ciphered_text;
    },

    // 復号化
    decipher: function (ciphered_text) {
        var decipher = crypto.createDecipher(algorithm, secret);
        var dec = decipher.update(ciphered_text, output_encoding, 'utf8');
        dec += decipher.final(output_encoding);
        return dec;
    }
}

module.exports = aes
