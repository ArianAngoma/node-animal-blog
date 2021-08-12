const {Router} = require('express');

const {getUsers, viewNewUser, createNewUser} = require('../controllers/users');

const router = Router();

router.get('/users', getUsers);

router.get('/new-user', viewNewUser);

router.post('/save-new-user', createNewUser);

module.exports = router;