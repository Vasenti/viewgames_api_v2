export class User {
    readonly id: string;
    readonly name: string;
    readonly username: string;
    readonly email: string;
    readonly password: string;
    readonly avatar: string;
    readonly created_at: string;
    readonly deleted_at: string;
    readonly updated_at: string;
    
    constructor(
        {
            id,
            name,
            username,
            email,
            password,
            avatar,
            created_at,
            deleted_at,
            updated_at
        }:{
            id: string,
            name: string,
            username: string,
            email: string,
            password: string,
            avatar: string,
            created_at: string,
            deleted_at: string,
            updated_at: string
        }
    ){
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.password = password;
        this.avatar = avatar;
        this.created_at = created_at;
        this.deleted_at = deleted_at;
        this.updated_at = updated_at;
    }
}