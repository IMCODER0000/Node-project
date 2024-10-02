const express = require('express');
const userController = require('../Controllers/quizController');
const router = express.Router();


// router.post('/quiz', userController.createUser);
router.get('/quizClass/all', userController.getAllQuizClass);
// router.put('/users/:id', userController.updateUser);
// router.delete('/users/:id', userController.deleteUser);

module.exports = router;
