import { validate } from "../../../../utils";
import { check, CustomError } from "../../../../shared";

export class Users {

    constructor(
        public id:number,
        public email:string,
        public name:string,
        // public img?:string,
    ){}

    static fromObject= (object:{[key:string]:any} ):Users => {
        const { id, email, name } = object;

        check.positiveInt(id, 'id').values;
        check.stringEmpty(name, 'name').values;   
        check.email(email, 'email').values;
        
        return new Users(id, email, name);
    }

    
}