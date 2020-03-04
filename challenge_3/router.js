const controller = require('./controller');
const router = require('express').Router();

router.post('/', (req, res) => {
  controller(req, res);
})

module.exports = router;