const express = require('express');
const controller = require('./controller');
const router = express.Router();

router.get('/api', (req, res) => {
  controller.sayHello(req, res);
})

module.exports = router;