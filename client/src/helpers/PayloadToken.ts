import { JwtPayload } from "jwt-decode";

export interface PayloadToken extends JwtPayload {
    id: string,
    name: string
}