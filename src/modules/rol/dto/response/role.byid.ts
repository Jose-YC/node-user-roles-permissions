import { PermissionResponseDto } from "../../../permission/dto";

export class RoleResponseDto {

    constructor(
        public id:number,
        public name:string,
        public description:string,
        public permissions: PermissionResponseDto[]
    ){}
}