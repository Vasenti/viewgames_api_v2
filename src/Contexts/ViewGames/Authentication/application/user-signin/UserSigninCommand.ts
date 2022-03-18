import { Command } from "../../../../Shared/domain/Command";

type Params = {
    email: string,
    password: string,
};

export class UserSigninCommand extends Command {
    email: string;
    password: string;

    constructor({ email, password}: Params) {
        super();
        this.email = email;
        this.password = password;
    }
}