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
  
        return new User(
            Number(id) || 0,
            email.trim().toLowerCase() || "Sin email",
            name.trim().toLowerCase() || "Sin nombre",
            Array.isArray(roles)
                ? roles.map((role: any) => ({
                    id: Number(role.id) || 0,
                    name: role.name.trim() || "Sin nombre",
                }))
                : []
        );
    }
}