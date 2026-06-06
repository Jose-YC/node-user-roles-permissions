import { check, PaginateDto } from "../../../../shared";

export class UserPaginateDto extends PaginateDto {

    private constructor(
        public readonly page:number,
        public readonly lim:number,
        public readonly search?:string,
        public readonly rol?:number,
    ) {
        super(page, lim, search);
    }   

    static create({ page, lim, search, rol }:{[key:string]:any}): UserPaginateDto {

        this.valid({page, lim, search});
        check.positiveInt(rol, 'rol').optional;

        return new UserPaginateDto(page, lim, search?.trim(), rol);
    }
}