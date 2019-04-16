require('dotenv').config()
const bcrypt = require('bcrypt');
const saltRounds = 10;

async function crypt(text) {
   let encrypted = await bcrypt.hash(text, saltRounds)
   return encrypted
}
        
module.exports = crypt
