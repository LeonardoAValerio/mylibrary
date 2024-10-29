import jwt from 'jsonwebtoken';
import enviorments from '../enviorments';

class Token {
    token: string;

    constructor(token: string) {
        this.token = token;
    }
}

export function generateToken(payload: any): Token {
    const token = jwt.sign(payload, enviorments.KEY_JWT);
    return new Token(token);
}