import { v4 as uuidv4, validate as uuidValidate } from 'uuid';

export class Uuid {
    static createUuid(): string {
        return uuidv4();
    }

    static validateUuid(uuid: string): boolean {
        return uuidValidate(uuid);
    }
}