import Router from "express";

const router = Router();


// import all controller
import * as controller from "../controllers/appController.js";


// POST METHOD
router.route("/register").post(controller.register) //register user

// router.route("/registerMail").post(); // send the email
router.route("/authenticate").post((req,res) => res.send()); // authenticate user
router.route("/login").post(controller.login);         // login in app

// GET METHOD 
router.route("/user/:username").get(controller.getUser);  // user with username
router.route("/generateOTP").get(controller.generateOTP);     // generate random otp
router.route("/verifyOTP").get(controller.verifyOTP);          // verify generated otp
router.route("/createResetSession").get(controller.createResetSession); // reset all the variables


// PUT METHOD
router.route("/updateuser").put(controller.updateUser);     //update user profile
router.route("/resetPassword").put(controller.resetPassword);  // reset password

export default router;