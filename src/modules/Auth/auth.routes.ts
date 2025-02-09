import { Router } from "express";
import { AuthController } from "./auth.controller";
import { UserValidation } from "../User/user.validation";
import validateRequest from "../../middlewares/validateRequest";

const router = Router();

router.post('/register',validateRequest(UserValidation.registerUserValidationSchema), AuthController.registerUser)
router.post('/login',validateRequest(UserValidation.loginUserValidationSchema), AuthController.loginUser)

export const AuthRoutes = router;