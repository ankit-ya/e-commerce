import express from 'express'
import {registerController, loginController,testController,forgetPasswordController} from '../controllers/authController.js';
import { requireSignIn } from '../middlewares/authMiddleware.js';
import { isAdmin } from '../middlewares/authMiddleware.js';

//router object 
  const router = express.Router()
 
 //routing
 //Register ||Method Post
 router.post('/register', registerController)

 //Login || Post
 router.post('/login',loginController);

 //Forget password || Post

 router.post('/forgot-password', forgetPasswordController);

 // test routes
 router.get('/test',requireSignIn, isAdmin,testController);

 //protected User route auth
 router.get("/user-auth", requireSignIn,(req, res)=>{
  res.status(200).send({ok: true});
 });

  //protected Admin route auth
  router.get("/admin-auth", requireSignIn,isAdmin,(req, res)=>{
    res.status(200).send({ok: true});
   });
 

export default router;