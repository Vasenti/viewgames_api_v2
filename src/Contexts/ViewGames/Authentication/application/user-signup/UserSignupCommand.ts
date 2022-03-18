import { Command } from "../../../../Shared/domain/Command";

type Params = {
    id: string,
    fullname: string,
    nickname: string,
    email: string,
    password: string,
    avatar: string,
    created_at: string,
    deleted_at: string,
    updated_at: string 
};

export class UserSignupCommand extends Command {
    id: string;
    fullname: string;
    nickname: string;
    email: string;
    password: string;
    avatar: string;
    created_at: string;
    deleted_at: string;
    updated_at: string;

    constructor({ id, fullname, nickname, email, password, avatar, created_at, deleted_at, updated_at}: Params) {
        super();
        this.id = id;
        this.fullname = fullname;
        this.nickname = nickname;
        this.email = email;
        this.password = password;
        this.avatar = avatar;
        this.created_at = created_at;
        this.deleted_at = deleted_at;
        this.updated_at = updated_at;
    }
}