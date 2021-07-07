const { Quiz } = require('../../db/schema.ts');

module.exports = {
  getQuiz: async function(method: any, headers: any, body: any, query: any, params: any) {
    try {
      let response = await Quiz.find({});
      return response;
    } catch(err) {
      console.error('Data not retrieved: ', err);
    }
  },
  getAllQuizzes: async function(method: any, headers: any, body: any, query: any, params: any) {
    try {
      let response = await Quiz.find();
      return response;
    } catch(err) {
      console.error('Data not retrieved: ', err);
    }
  },
  addQuiz: async function(method: any, headers: any, body: any, query: any, params: any) {
    const newQuiz = new Quiz({
      user: 'random user',
      questions: body
    })

    try {
      let response = await newQuiz.save();
      return response;
    } catch(err) {
      console.error('Data not updated: ', err);
    }
  }
}