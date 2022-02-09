import { User } from "../domain/User";
import { UserRepository } from "../domain/UserRepository";

export class UserSignup {
    private repository: UserRepository;

    constructor(repository: UserRepository){
        this.repository = repository;
    }

    async run(
        id: string,
        name: string,
        username: string,
        email: string,
        password: string,
        avatar: string,
        created_at: string,
        deleted_at: string,
        updated_at: string
    ): Promise<void>{
        const user = new User({id, name, username, email, password, avatar, created_at, deleted_at, updated_at});

        return this.repository.save(user);
    }
}