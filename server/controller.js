const model = require('./model');

module.exports = {
  sayHello: async function (req, res) {
    try {
      let data = await model.sayHello(req.method, req.headers, req.body, req.query, req.params);
      res.status(200).json(data);
    } catch (err) {
      console.log(`Controller ${err}`);
      res.status(404).end()
    }
  }
}