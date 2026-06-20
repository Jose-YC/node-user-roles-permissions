import { Router } from "express";
import { AuthRoutes, PermissionRoutes, RoleRoutes, UserRoutes, ImageRoutes } from "../modules";

export class AppRoutes {

    static get routes():Router{
        const router = Router();
        router.use('/auth', AuthRoutes.routes);
        router.use('/user', UserRoutes.routes);
        router.use('/rol', RoleRoutes.routes);
        router.use('/permission', PermissionRoutes.routes);
        router.use('/image', ImageRoutes.routes);
        
        return router;
    }
}