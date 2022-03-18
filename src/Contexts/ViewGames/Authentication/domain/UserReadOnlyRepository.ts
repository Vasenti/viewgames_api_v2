import { User } from "./User";

export interface UserReadOnlyRepository {
    fetch(user: User): Promise<User>;
}