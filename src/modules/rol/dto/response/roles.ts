export class Roles {

    constructor(
        public id:number,
        public name:string,
        public description:string,
        public permissions:number,
    ){}

    static fromObject= (object:{[key:string]:any} ):Roles => {
        const {id, name, description, permissions} = object;
        
        return new Roles(
            Number(id) || 0,
            name.trim().toLowerCase() || "Sin nombre",
            description.trim() || "Sin descripción",
            Number(permissions) || 0
        );
    }
}