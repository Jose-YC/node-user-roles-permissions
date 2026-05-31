import { check, CustomError } from "../../../../shared";

export class UpdateRolDtos {

    private constructor(
        public readonly id:number,
        public readonly name?:string,
        public readonly description?:string,
        public readonly permissions_id?:number[],
    ){}

    static create(props: {[key:string]:any}): UpdateRolDtos{
        const {id, name, description, permissions_id} = props;

        check.atLeastOne(name, description, permissions_id)
        check.positiveInt(id, 'id').values;
        check.stringEmpty(name, 'name').optional;
        check.stringEmpty(description, 'description').optional;
        const permissions = check.arrayInteger(permissions_id, 'permissions id').optional;
        
        if (permissions !== null) {
            if (permissions.length < 2) 
                throw CustomError.badRequest('permissions array must have at least 2 elements');
        }
        
        return new UpdateRolDtos(id, name?.trim().toLowerCase(), description?.trim(), permissions || undefined);
    }
}