const crypto = require('crypto');
// salt
const salt = 'daniel123';
const hash_password = crypto.createHmac('sha256', salt)
                   .update('Daniel Ganteng')
                   .digest('hex');
console.log(hash_password);
