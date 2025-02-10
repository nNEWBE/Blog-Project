import { Router } from "express";
import { AuthRoutes } from "../modules/Auth/auth.route";
import { BlogRoutes } from "../modules/Blog/blog.route";
import { AdminRoutes } from "../modules/Admin/admin.route";
import { UserRoutes } from "../modules/User/user.route";

const router = Router();
const moduleRoutes = [
    {
        path: "/auth",
        router: AuthRoutes
    },
    {
        path: "/blogs",
        router: BlogRoutes
    },
    {
        path: "/users",
        router: UserRoutes
    },
    {
        path: "/admin",
        router: AdminRoutes
    }
];

moduleRoutes.forEach(route => {
    router.use(route.path, route.router);
});

export default router;