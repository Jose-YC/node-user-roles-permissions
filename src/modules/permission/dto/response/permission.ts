export class PermissionResponseDto {

    constructor(
        public id:number,
        public name:string,
        public module:string,
    ){}

    static fromObject= (object:{[key:string]:any} ):PermissionResponseDto => {
        const { id, name, module  } = object;
        
        return new PermissionResponseDto(
            Number(id) || 0,
            name.trim().toLowerCase() || "Sin nombre",
            module.trim().toUpperCase() || "Sin módulo"
        );
    }
}