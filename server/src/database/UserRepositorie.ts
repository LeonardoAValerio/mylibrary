import { query } from "../db";
import { User } from "../models/User";

export class UserRepositorie {
    static async getAllUsers() {
        const result = await query("SELECT * FROM users");
        const users = result.rows.map(user => new User(user))
        return users;
    }

    static async getUserById(id: string) {
        const result = await query("SELECT * FROM users where id = $1", [id]);
        const user = new User(result.rows[0]);
        return user;
    }

    static async getUserByEmail(email: string) {
        const result = await query("SELECT * FROM users where email = $1", [email]);
        const user = new User(result.rows[0]);
        return user;
    }

    static async createUser(user: User) {
        const params = [user.id, user.name, user.email, user.password];
        await query("INSERT INTO users values($1, $2, $3, $4)", params);
    }

    static async updateUser(set: {propertie: string, value:any}, id: string) {
        const queryText = `UPDATE users SET ${set.propertie} = $1 WHERE id = $2`
        const params = [set.value, id];
        await query(queryText, params)
    }

    static async deleteUser(id: string) {
        await query("DELETE from users WHERE id = $1", [id]);
    }
}