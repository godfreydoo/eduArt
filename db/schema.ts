export {};
const mongoose = require('mongoose');

const quizSchema = mongoose.Schema({
  user: {type: String, required: true, createIndexes: true},
  title: {type: String, required: true, createIndexes: true},
  subject: {type: String, required: true, enum: ['Math', 'Science', 'Social Studies', 'English', 'Other'], createIndexes: true},
  photoUrl: {type: String, required: true, createIndexes: true},
  description: {type: String, required: true, createIndexes: true},
  questions: mongoose.Schema.Types.Mixed
});

const Quiz = mongoose.model('Quiz', quizSchema);

module.exports = {
  Quiz
};