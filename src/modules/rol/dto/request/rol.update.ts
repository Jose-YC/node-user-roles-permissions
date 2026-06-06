import { check, CustomError } from "../../../../shared";

export class UpdateRoleRequestDto {

    private constructor(
        public readonly id:number,
        public readonly name?:string,
        public readonly description?:string,
        public readonly permissions_id?:number[],
    ){}

    static create(props: {[key:string]:any}): UpdateRoleRequestDto{
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
        
        return new UpdateRoleRequestDto(id, name?.trim().toLowerCase(), description?.trim(), permissions || undefined);
    }
}