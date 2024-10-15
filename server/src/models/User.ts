interface userAttributes {
    id: string;
    name: string;
    email: string;
    password: string;
}

export class User implements userAttributes {
    id: string;
    name: string;
    email: string;
    password: string;

    constructor(attribrutes: userAttributes) {
        this.id = attribrutes.id;
        this.name = attribrutes.name;
        this.email = attribrutes.email;
        this.password = attribrutes.password;
    } 
}