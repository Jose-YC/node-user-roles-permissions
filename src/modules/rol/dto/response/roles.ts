import { check, CustomError } from "../../../../shared";

export class Roles {

    constructor(
        public id:number,
        public name:string,
        public description:string,
        public permissions:number,
    ){}

    static fromObject= (object:{[key:string]:any} ):Roles => {
        const {id, name, description, permissions} = object;

        check.positiveInt(id, 'id').values;
        check.stringEmpty(name, 'name').values;
        check.stringEmpty(description, 'description').values;
        check.isInteger(permissions, 'permissions').values;
        
        return new Roles(id, name.trim().toLowerCase(), description.trim(), permissions);
    }
}