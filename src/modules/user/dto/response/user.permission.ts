import { validate } from "../../../../utils";
import { check, CustomError } from "../../../../shared";


export class UserPermissions {

    constructor(
        public id:number,
        public email:string,
        public name:string,
        public permissions:string[],
        // public img?:string,
    ){}

    static fromObject= (object:{[key:string]:any} ):UserPermissions => {
        const {id, email, name, permissions} = object;

        check.positiveInt(id, 'id').values;
        check.stringEmpty(name, 'name').values;   
        check.email(email, 'email').values;
                
        if (!Array.isArray(permissions)) throw CustomError.badRequest('Roles must be an array');
            
        return new UserPermissions(id, email, name, permissions);
    }
}