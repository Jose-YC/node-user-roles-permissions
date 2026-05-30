import { check } from "../validators/check.validator";

export abstract class PaginateDto {

    protected constructor(
        public page:number,
        public lim:number,
        public search?:string,
    ){}

    protected static valid({page, lim, search}:{[key:string]:any}) {
        check.positiveInt(page, 'page').values;
        check.positiveInt(lim, 'lim').values;
        check.stringEmpty(search, 'search').optional;
    }


}