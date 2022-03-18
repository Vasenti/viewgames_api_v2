import { Request, Response, Router } from "express";
import container from '../dependency-injection';

export const register = (router: Router) => {
    const authController = container.get('Apps.viewgames.controllers.AuthController');
    router.post('/auth', (req: Request, res: Response) => authController.run(req, res));
}