export {};
const mongoose = require('mongoose');

const quizSchema = mongoose.Schema({
  user: {type: String, createIndexes: true},
  questions: mongoose.Schema.Types.Mixed
});

const Quiz = mongoose.model('Quiz', quizSchema);

module.exports = {
  Quiz
};