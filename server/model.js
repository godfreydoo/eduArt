const { pool } = require('../db/index');

module.exports = {
  sayHello: async function(method, headers, body, query, params) {
    return 'Hello Godfrey'
  }
}