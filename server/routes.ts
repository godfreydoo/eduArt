const express = require('express');
const controllers = require('./controllers');
const router = express.Router();

router.get('/quiz/:id', (req: any, res: any) => {
  controllers.database.getQuiz(req, res);
})

router.get('/quiz', (req: any, res: any) => {
  controllers.database.getAllQuizzes(req, res);
})

router.post('/quiz', (req: any, res: any) => {
  controllers.database.addQuiz(req, res);
})

router.get('/picture', (req: any, res: any) => {
  controllers.external.fetchPicture(req, res);
})

module.exports = router;