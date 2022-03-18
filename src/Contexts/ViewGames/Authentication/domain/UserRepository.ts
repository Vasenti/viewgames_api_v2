import { Collection, Document } from "mongodb";
import { Nullable } from "../../../Shared/domain/Nullable";
import { User } from "./User";

export interface UserRepository {
    signup(user: User): Promise<void>;
    signin(user: User): Promise<Nullable<User>>;
}