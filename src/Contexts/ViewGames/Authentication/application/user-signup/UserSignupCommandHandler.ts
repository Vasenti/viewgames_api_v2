import { Command } from "../../../../Shared/domain/Command";
import { CommandHandler } from "../../../../Shared/domain/CommandHandler";
import { User } from "../../domain/User";
import { UserSignup } from "./UserSignup";
import { UserSignupCommand } from "./UserSignupCommand";

export class UserSignupCommandHandler implements CommandHandler<UserSignupCommand> {
    constructor(private usersignup: UserSignup) {}

    subscribedTo(): Command {
        return UserSignupCommand;
    }

    async handle(command: UserSignupCommand): Promise<void> {
        const user = new User({
            id: command.id,
            fullname: command.fullname,
            nickname: command.nickname,
            email: command.email,
            password: command.password,
            avatar: command.avatar,
            created_at: command.created_at,
            deleted_at: command.deleted_at,
            updated_at: command.updated_at
        })

        console.log(user)
        await this.usersignup.run(user)
    }
}