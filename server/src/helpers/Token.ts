import jwt from 'jsonwebtoken';
import enviorments from '../enviorments';

class Token {
    token: string;

    constructor(token: string) {
        this.token = token;
    }
}

export interface DecodedToken {
    id: string,
}

export function generateToken(payload: any): Token {
    const token = jwt.sign({...payload}, enviorments.KEY_JWT, {expiresIn: "24h"});
    return new Token(token);
}