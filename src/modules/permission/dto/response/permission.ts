import { check } from "../../../../shared";

export class Permission {

    constructor(
        public id:number,
        public name:string,
        public module:string,
    ){}

    static fromObject= (object:{[key:string]:any} ):Permission => {
        const { id, name, module  } = object;
        
        check.positiveInt(id, 'id').values;
        check.stringEmpty(name, 'name').values;
        check.stringEmpty(module, 'module').values;
        
        return new Permission(id, name, module);
    }
}