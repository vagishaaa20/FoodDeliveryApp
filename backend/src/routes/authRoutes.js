const express= require('express')
const authController= require('../controllers/authController');

const router= express.Router();

//user auth APIs
router.post('/register', authController.registerUser);
router.post('/login', authController.loginUser);
router.get('/logout', authController.logoutUser);

//foodpartner auth APIs
router.post('/foodpartner/register', authController.registerFoodPartner);
router.post('/foodpartner/login', authController.loginFoodPartner);
router.get('/foodpartner/logout', authController.logoutFoodPartner);

module.exports = router;