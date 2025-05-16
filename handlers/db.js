const Keyv = require('keyv');
const db = new Keyv('sqlite://oversee.db');

module.exports = { db }