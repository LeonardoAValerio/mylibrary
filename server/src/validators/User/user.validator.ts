import { AjvErrors } from "../../helpers/Errors";
import { User } from "../../models/User";
import { validateJSONUser } from "./userValidation.schema";

export function validateUser(user: User): void {
    const result = validateJSONUser(user);
    if(!result && validateJSONUser.errors) {
        throw new AjvErrors("User is invalid!", validateJSONUser.errors)
    }
}