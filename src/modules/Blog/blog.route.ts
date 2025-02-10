import { Router } from "express";
import { BlogControllers } from "./blog.controller";
import auth from "../../middlewares/auth";
import { USER_ROLE } from "../User/user.constant";
import { BlogValidationSchema } from "./blog.validation";
import validateRequest from "../../middlewares/validateRequest";

const router = Router();

router.post('/', auth(USER_ROLE.admin, USER_ROLE.user),validateRequest(BlogValidationSchema.createBlogValidationSchema), BlogControllers.createBlog);

router.patch('/:id', auth(USER_ROLE.admin, USER_ROLE.user),validateRequest(BlogValidationSchema.updateBlogValidationSchema), BlogControllers.updateBlog);

router.delete('/:id', auth(USER_ROLE.admin, USER_ROLE.user), BlogControllers.deleteBlog);

router.get('/', BlogControllers.getAllBlogs);

export const BlogRoutes = router;