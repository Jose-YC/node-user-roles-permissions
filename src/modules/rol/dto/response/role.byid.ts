import { check, CustomError } from "../../../../shared";
import { Permission } from "../../../permission/dto";

export class Rol {

    constructor(
        public id:number,
        public name:string,
        public description:string,
        public permissions: Permission[]
    ){}

    static fromObject= (object:{[key:string]:any} ):Rol => {
        const { id, name, description, permissions}  = object;

        check.positiveInt(id, 'id').values;
        check.stringEmpty(name, 'name').optional;
        check.stringEmpty(description, 'description').optional;

        if (!Array.isArray(permissions)) 
            throw CustomError.badRequest('Permissions must be an array');
        
        if (permissions.length > 0) {
            permissions.map(p => Permission.fromObject(p));
        }
        
        return new Rol(id, name.trim().toLowerCase(), description.trim(), permissions);
    }
}