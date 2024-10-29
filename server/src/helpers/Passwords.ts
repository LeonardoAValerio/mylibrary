import envioroments from ".././enviorments";
import bcrypt from "bcrypt";
import { CustomError } from "./Errors";

export async function hashPassword(password: string) {
    try {
        const hash = await bcrypt.hash(password, envioroments.SALTROUNDS);
        return hash;
    } catch(e) {
        throw new CustomError("Error to cryptograh the password")
    }
}

export async function comparePassword(password: string, passwordToCompare: string) {
    try {
        return await bcrypt.compare(password, passwordToCompare);
    } catch(e) {
        throw new CustomError("Error to compare the passwords")
    }
}