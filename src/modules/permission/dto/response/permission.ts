export class Permission {

    constructor(
        public id:number,
        public name:string,
        public module:string,
    ){}

    static fromObject= (object:{[key:string]:any} ):Permission => {
        const { id, name, module  } = object;
        
        return new Permission(
            Number(id) || 0,
            name.trim().toLowerCase() || "Sin nombre",
            module.trim().toUpperCase() || "Sin módulo"
        );
    }
}