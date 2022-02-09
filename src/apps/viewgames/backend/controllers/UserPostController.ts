import { Request, Response } from "express-serve-static-core";
import httpStatus from "http-status";
import { UserSignup } from "../../../../Contexts/ViewGames/Juegos/application/UserSignup";
import { Controller } from "./controller";

export class UserPostController implements Controller {
    constructor() {}

    async run(req: Request, res: Response){
        const data = req.body;
        let service;
        switch(data.type){
            case 'signup':
                //service = new UserSignup()
                break;
        }
        res.status(httpStatus.OK).send('la tuya perro');
    }
}