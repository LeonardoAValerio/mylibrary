import { UserRepositorie } from "../database/UserRepositorie";
import { CustomError } from "../helpers/Errors";
import { helperUserId } from "../helpers/Ids";
import { comparePassword, hashPassword } from "../helpers/Passwords";
import { generateToken } from "../helpers/Token";
import { User } from "../models/User";
import { validateUser } from "../validators/User/user.validator";


export class UserService {
    static async getUsers() {
        const users = await UserRepositorie.getAllUsers();
        return users;
    }

    static async validateUserPassword(name: string, passwordReceived: string) {
        const user = await UserRepositorie.getUserByName(name);
        const result = await comparePassword(passwordReceived, user.password);
        if(result) {
            return generateToken({id: user.id});
        }
        throw new CustomError("Invalid password!");
    }

    static async userEmailExist(email: string) {
        const users = await this.getUsers();
        const isHasEmailExist = users.some(user => user.email === email);
        if(isHasEmailExist) throw new Error("User emails alredy exist!");
    }

    static async postUser(data: any) {
        validateUser(data);
        const user = new User(data);
        await this.userEmailExist(user.email);
        await helperUserId(user);
        user.password = await hashPassword(user.password);
        UserRepositorie.createUser(user);
    }
}