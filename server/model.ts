export {};
const { pool } = require('../db/index');

module.exports = {
  sayHello: async function(method: any, headers: any, body: any, query: any, params: any) {
    return 'Hello Godfrey'
  }
}