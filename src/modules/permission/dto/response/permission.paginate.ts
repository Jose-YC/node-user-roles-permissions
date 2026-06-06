import { PaginateDto } from "../../../../shared";

export class PermissionPaginateDto extends PaginateDto {

    private constructor(
        public readonly page:number,
        public readonly lim:number,
        public readonly search?:string,
    ) {
        super(page, lim, search);
    }   

    static create(object:{[key:string]:any}): PermissionPaginateDto {
        const { page, lim, search } = object;

        this.valid({page, lim, search});

        return new PermissionPaginateDto(page, lim, search?.trim().toLowerCase());
    }
}