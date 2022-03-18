import { Command } from "../../../../Shared/domain/Command";
import { CommandHandler } from "../../../../Shared/domain/CommandHandler";
import { User } from "../../domain/User";
import { UserSignin } from "./UserSignin";
import { UserSigninCommand } from "./UserSigninCommand";

export class UserSigninCommandHandler implements CommandHandler<UserSigninCommand> {
    constructor(private usersignin: UserSignin) {}

    subscribedTo(): Command {
        return UserSigninCommand;
    }

    async handle(command: UserSigninCommand): Promise<void> {
        const user = new User({
            id: '',
            fullname: '',
            nickname: '',
            email: command.email,
            password: command.password,
            avatar: '',
            created_at: '',
            deleted_at: '',
            updated_at: ''
        })

        console.log(user)
        await this.usersignin.run(user)
    }
}