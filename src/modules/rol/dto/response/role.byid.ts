import { Permission } from "../../../permission/dto";

export class RoleResponseDto {

    constructor(
        public id:number,
        public name:string,
        public description:string,
        public permissions: Permission[]
    ){}

    static fromObject= (object:{[key:string]:any} ):RoleResponseDto => {
        const { id, name, description, permissions}  = object;
        
        return new RoleResponseDto(
            Number(id) || 0, 
            name.trim().toLowerCase() || "", 
            description.trim() || "",
            Array.isArray(permissions) ? permissions.map((permission:any) => Permission.fromObject(permission)) : [] 
        );
    }
}