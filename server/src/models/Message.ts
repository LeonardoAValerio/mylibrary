interface MessageAttributes {    
    message: string,
    statusCode: number;
}


export class Message implements MessageAttributes {
    message: string;
    statusCode: number;

    constructor(message: string, statusCode: number) {
        this.message = message;
        this.statusCode = statusCode;
    }
}