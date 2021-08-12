const {Router} = require('express');

const {getUsersByAnimal} = require('../controllers/users');

const router = Router();

router.get('/user', getUsersByAnimal);

module.exports = router;