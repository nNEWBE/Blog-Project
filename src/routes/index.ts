import { Router } from "express";
import { AuthRoutes } from "../modules/Auth/auth.route";
import { BlogRoutes } from "../modules/Blog/blog.route";

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
];

moduleRoutes.forEach(route => {
    router.use(route.path, route.router);
});

export default router;