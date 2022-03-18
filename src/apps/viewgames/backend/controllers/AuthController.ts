import { Request, Response } from "express-serve-static-core";
import httpStatus from "http-status";
import { Command } from "../../../../Contexts/Shared/domain/Command";
import { CommandBus } from "../../../../Contexts/Shared/domain/CommandBus";
import { UserSigninCommand } from "../../../../Contexts/ViewGames/Authentication/application/user-signin/UserSigninCommand";
import { UserSignupCommand } from "../../../../Contexts/ViewGames/Authentication/application/user-signup/UserSignupCommand";
import { UserAlreadyExists } from "../../../../Contexts/ViewGames/Authentication/domain/UserAlreadyExists";
import { UserNotExists } from "../../../../Contexts/ViewGames/Authentication/domain/UserNotExists";
import { Controller } from "./controller";

enum authType {
    login = "LOGIN",
    registro = "REGISTRO"
};

export class AuthController implements Controller {
    constructor(private commandBus: CommandBus) { console.log(commandBus)}

    async run(req: Request, res: Response){
        switch(req.body.request_type){
            case authType.registro:
                const userSignupCommand = new UserSignupCommand({
                    id: req.body.id,
                    fullname: req.body.fullname,
                    nickname: req.body.nickname,
                    email: req.body.nickname,
                    password: req.body.nickname,
                    avatar: req.body.avatar,
                    created_at: req.body.created_at,
                    deleted_at: req.body.deleted_at,
                    updated_at: req.body.updated_at
                });
                this.dispatch(userSignupCommand, res);
                break;
            case authType.login:
                const userSigninCommand = new UserSigninCommand({
                    email: req.body.email,
                    password: req.body.password
                });
                this.dispatch(userSigninCommand, res);
                break;
        }
    }

    async dispatch(command: Command, res: Response){
        console.log(command)
        try{
            await this.commandBus.dispatch(command);
        }catch(error){
            if(error instanceof UserAlreadyExists || error instanceof UserNotExists){
                res.status(httpStatus.BAD_REQUEST).send(error.message);
            }else {
                res.status(httpStatus.INTERNAL_SERVER_ERROR).json(error);
            }
        }
        res.status(httpStatus.OK).send();
    }
}