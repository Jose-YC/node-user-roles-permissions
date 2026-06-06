export class UserListItemDto {

    constructor(
        public id:number,
        public email:string,
        public name:string,
        // public img?:string,
    ){}

    static fromObject= (object:{[key:string]:any} ):UserListItemDto => {
        const { id, email, name } = object;

        return new UserListItemDto(
            Number(id) || 0,
            email.trim().toLowerCase() || "Sin email",
            name.trim().toLowerCase() || "Sin nombre"
        );
    }

    
}