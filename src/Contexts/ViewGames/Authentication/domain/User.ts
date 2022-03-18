
import { AggregateRoot } from "../../../Shared/domain/AggregateRoot";
import { UserId } from "../../Shared/domain/Users/UserId";
import { UserAvatar } from "./UserAvatar";
import { UserCreatedAt } from "./UserCreatedAt";
import { UserCreatedDomainEvent } from "./UserCreatedDomainEvent";
import { UserDeletedAt } from "./UserDeletedAt";
import { UserEmail } from "./UserEmail";
import { UserFullname } from "./UserFullname";
import { UserNickname } from "./UserNickname";
import { UserPassword } from "./UserPassword";
import { UserUpdatedAt } from "./UserUpdatedAt";

export class User extends AggregateRoot{
    readonly id: string;
    readonly fullname: string;
    readonly nickname: string;
    readonly email: string;
    readonly password: string;
    readonly avatar: string;
    readonly created_at: string;
    readonly deleted_at: string;
    readonly updated_at: string;
    
    constructor(
        {
            id,
            fullname,
            nickname,
            email,
            password,
            avatar,
            created_at,
            deleted_at,
            updated_at
        }:{
            id: string,
            fullname: string,
            nickname: string,
            email: string,
            password: string,
            avatar: string,
            created_at: string,
            deleted_at: string,
            updated_at: string
        }
    ){
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

    static create(userDTO: User): User{
        const user = new User(userDTO);
        user.record(
            new UserCreatedDomainEvent({
                id: user.id,
                user: user
            })
        )

        return user;
    }
    static fromPrimitives(plainData: { 
        id: string,
        fullname: string,
        nickname: string,
        email: string,
        password: string,
        avatar: string,
        created_at: string,
        deleted_at: string,
        updated_at: string 
    }): User {
        return new User({
            id: plainData.id,
            fullname: plainData.fullname,
            nickname: plainData.nickname,
            email: plainData.email,
            password: plainData.password,
            avatar: plainData.avatar,
            created_at: plainData.created_at,
            deleted_at: plainData.deleted_at,
            updated_at: plainData.updated_at
        });
        // return new User(
        //     new UserId(plainData.id),
        //     new UserFullname(plainData.fullname),
        //     new UserNickname(plainData.nickname),
        //     new UserEmail(plainData.email),
        //     new UserPassword(plainData.password),
        //     new UserAvatar(plainData.avatar),
        //     new UserCreatedAt(plainData.created_at),
        //     new UserDeletedAt(plainData.deleted_at),
        //     new UserUpdatedAt(plainData.updated_at)
        // );
    }

    toPrimitives() {
        return {
            id: this.id,
            fullname: this.fullname,
            nickname: this.nickname,
            email: this.email,
            password: this.password,
            avatar: this.avatar,
            created_at: this.created_at,
            deleted_at: this.deleted_at,
            updated_at: this.updated_at
        };
    }
}