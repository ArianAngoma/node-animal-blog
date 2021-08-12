const {Router} = require('express');

const {getAnimals} = require('../controllers/animals');

const router = Router();

router.get('/', getAnimals);

module.exports = router;