import { PaginateDto } from "../../../../shared";
export class RolePaginateDto extends PaginateDto {

    private constructor(
        public readonly page:number,
        public readonly lim:number,
        public readonly search?:string,
    ) {
        super(page, lim, search);
    }   

    static create(object:{[key:string]:any}): RolePaginateDto {
        const { page, lim, search } = object;

        this.valid({page, lim, search});

        return new RolePaginateDto(page, lim, search?.trim().toLowerCase());
    }
}