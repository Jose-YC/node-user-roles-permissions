import { check, CustomError } from "../../../../shared";

export class CreateRoleRequestDto {

    private constructor(
        public readonly name:string,
        public readonly description:string,
        public readonly permissions_id:number[],
    ){}

    static create(props: {[key:string]:any}): CreateRoleRequestDto{
        const { name, description, permissions_id } = props;
        
        check.stringEmpty(name, 'name').values;
        check.stringEmpty(description, 'description').values;
        const permissions = check.arrayInteger(permissions_id, 'permissions id').values;

        if (permissions.length < 2) 
            throw CustomError.badRequest('permissions array must have at least 2 elements');

        
        return new CreateRoleRequestDto(name.trim().toLowerCase(), description.trim(),  permissions);
    }
}