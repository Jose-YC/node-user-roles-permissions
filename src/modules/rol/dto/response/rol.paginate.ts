import { PaginateDto } from "../../../../shared";
export class RolPaginateDtos extends PaginateDto {

    private constructor(
        public readonly page:number,
        public readonly lim:number,
        public readonly search?:string,
    ) {
        super(page, lim, search);
    }   

    static create(object:{[key:string]:any}): RolPaginateDtos {
        const { page, lim, search } = object;

        this.valid({page, lim, search});

        return new RolPaginateDtos(page, lim, search?.trim().toLowerCase());
    }
}