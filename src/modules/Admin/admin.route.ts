import { Router } from "express";
import { AdminController } from "./admin.controller";
import auth from "../../middlewares/auth";
import { USER_ROLE } from "../User/user.constant";

const router = Router();

router.patch('/users/:id/block', auth(USER_ROLE.admin), AdminController.blockUser);
router.delete('/blogs/:id', auth(USER_ROLE.admin), AdminController.deleteBlog);

export const AdminRoutes = router;