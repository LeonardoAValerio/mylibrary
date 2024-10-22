import { UserRepositorie } from "../database/UserRepositorie";
import { helperBookId } from "../helpers/Book";
import { CustomError } from "../helpers/Errors";
import { Uuid } from "../helpers/Uuid";
import { Book } from "../models/Book";
import { validateBook } from "../validators/Book/book.validator";

export class UserService {
    static async getUsers() {
        const users = await UserRepositorie.getAllUsers();
        return users;
    }

    static async getUserByNameAndPassword(userAttributes: {name: string, password: string}) {
        const book = await UserRepositorie.getUserByNameAndPassword(userAttributes);
        return book;
    }

    static async postUser() {
        
    }
}