
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class Person {
    id: number;
    name: string;
    age: number;
}

export class Message {
    id: number;
    description: string;
}

export abstract class IQuery {
    abstract messages(): Message[] | Promise<Message[]>;
    abstract people(): Person[] | Promise<Person[]>;
}

export abstract class IMutation {
    abstract createMessage(description: string): Message | Promise<Message>;
    abstract createPerson(name: string, age: number): Person | Promise<Person>;
}
