import { check, CustomError } from "../../../../shared";
import { validate } from "../../../../utils";

export interface UserRole {
    id: number;
    name: string;
}

export class User {

    constructor(
        public id:number,
        public email:string,
        public name:string,
        public rol:UserRole[],
        // public img?:string,
    ){}

    static fromObject= (object:{[key:string]:any} ):User => {
        const {id, email, name, roles} = object;

        check.positiveInt(id, 'id').values;
        check.stringEmpty(name, 'name').values;    
        check.email(email, 'email').values;
        
        
        let validatedRoles: UserRole[] = [];
        if (!Array.isArray(roles)) throw CustomError.badRequest('Roles must be an array');
        if (roles.length > 0) {
             validatedRoles = this.validateRoles(roles);
        }
  
        return new User(id, email, name, validatedRoles);
    }

    private static validateRoles = (roles: any[]): UserRole[] => {
        return roles.map((role, index) => {
            check.positiveInt(role.id, 'rol id').values;
            check.stringEmpty(role.name, 'rol name').values;

            return { id: role.id, name: role.name.trim() };
        });
    }
}