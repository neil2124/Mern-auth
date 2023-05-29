import express from 'express';
const  router = express.Router();
// Need to add .js as we are using type esmodule in package.json 
import { authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile } from '../controllers.js/userController.js'; 
import { protect } from '../middleware/authMiddleware.js';
router.post('/' , registerUser);
router.post('/auth' , authUser);
router.post('/logout' , logoutUser);
router.post('/register' , registerUser);
router.route('/profile').get(protect,getUserProfile).put(protect,updateUserProfile);


export default router;