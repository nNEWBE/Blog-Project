import { Router } from "express";
import { AuthRoutes } from "../modules/Auth/auth.routes";

const router = Router();
const moduleRoutes = [
    {
        path: "/auth",
        router: AuthRoutes
    },];

moduleRoutes.forEach(route => {
    router.use(route.path, route.router);
});

export default router;