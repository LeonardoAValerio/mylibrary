export interface UserAttributes {
    id: string;
    name: string;
    email: string;
    password: string;
}

export class User implements UserAttributes {
    id: string;
    name: string;
    email: string;
    password: string;

    constructor(attribrutes: UserAttributes) {
        this.id = attribrutes.id;
        this.name = attribrutes.name;
        this.email = attribrutes.email;
        this.password = attribrutes.password;
    } 
}