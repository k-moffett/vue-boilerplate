const bcrypt = require('bcrypt');

async function decrypt(text, hash) {
    let decrypted = await bcrypt.compare(text, hash).then(function(res) {
        // res == true will mean a correct password
        return res
    })
    return decrypted
}

module.exports = decrypt 