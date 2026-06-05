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

        return new UserPermissions(
            Number(id) || 0,
            email.trim().toLowerCase() || "Sin email",
            name.trim().toLowerCase() || "Sin nombre",
            Array.isArray(permissions) ? permissions.filter((permission:any)=> typeof permission === 'string') : []
        );
    }
}