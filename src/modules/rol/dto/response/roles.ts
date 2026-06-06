export class RoleListItemDto {

    constructor(
        public id:number,
        public name:string,
        public description:string,
        public count_permissions:number,
    ){}
}