export {};
const model = require('../models');

module.exports = {
  getQuiz: async function (req: any, res: any) {
    try {
      let data = await model.database.getQuiz(req.method, req.headers, req.body, req.query, req.params);
      res.status(200).json(data);
    } catch (err) {
      console.log(`Controller ${err}`);
      res.status(404).end()
    }
  },
  getAllQuizzes: async function (req: any, res: any) {
    try {
      let data = await model.database.getAllQuizzes(req.method, req.headers, req.body, req.query, req.params);
      res.status(200).json(data);
    } catch (err) {
      console.log(`Controller ${err}`);
      res.status(404).end()
    }
  },
  addQuiz: async function (req: any, res: any) {
    try {
      let data = await model.database.addQuiz(req.method, req.headers, req.body, req.query, req.params);
      res.status(200).json(data);
    } catch (err) {
      console.log(`Controller ${err}`);
      res.status(404).end()
    }
  },
}