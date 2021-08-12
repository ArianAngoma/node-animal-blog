const {Router} = require('express');

const {getUsersByAnimal} = require('../controllers/users-by-animal');

const router = Router();

router.get('/user-by-animal', getUsersByAnimal);

module.exports = router;