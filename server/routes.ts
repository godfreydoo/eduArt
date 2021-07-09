const express = require('express');
const controllers = require('./controllers');
const router = express.Router();

router.get('/quiz/:id', (req: any, res: any) => {
  controllers.database.getQuiz(req, res);
})

router.delete('/quiz/:id', (req: any, res: any) => {
  controllers.database.deleteQuiz(req, res);
})

router.get('/quiz', (req: any, res: any) => {
  controllers.database.getAllQuizzes(req, res);
})

router.post('/quiz', (req: any, res: any) => {
  controllers.database.addQuiz(req, res);
})

router.get('/photos', (req: any, res: any) => {
  controllers.external.fetchPhotos(req, res);
})

module.exports = router;