import { check, PaginateDto } from "../../../../shared";

export class UserPaginateDtos extends PaginateDto {

    private constructor(
        public readonly page:number,
        public readonly lim:number,
        public readonly search?:string,
        public readonly rol?:number,
    ) {
        super(page, lim, search);
    }   

    static create({ page, lim, search, rol }:{[key:string]:any}): UserPaginateDtos {

        this.valid({page, lim, search});
        check.positiveInt(rol, 'rol').optional;

        return new UserPaginateDtos(page, lim, search?.trim(), rol);
    }
}