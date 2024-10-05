interface MessageAttributes {    
    message: any,
    statusCode: number;
}


export class Message implements MessageAttributes {
    message: any;
    statusCode: number;

    constructor(message: any, statusCode: number) {
        this.message = message;
        this.statusCode = statusCode;
    }
}