const {Router} = require('express');

const {getUsers, viewNewUser, createNewUser, deleteUser} = require('../controllers/users');

const router = Router();

router.get('/users', getUsers);

router.get('/new-user', viewNewUser);

router.post('/save-new-user', createNewUser);

router.get('/delete/:id', deleteUser);

module.exports = router;