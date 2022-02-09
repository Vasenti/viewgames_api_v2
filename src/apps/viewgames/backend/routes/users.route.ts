import { Request, Response, Router } from "express";
import container from '../dependency-injection';

export const register = (router: Router) => {
    const userPostConstroller = container.get('Apps.viewgames.controllers.UserPostController');
    router.post('/user', (req: Request, res: Response) => userPostConstroller.run(req, res));
}