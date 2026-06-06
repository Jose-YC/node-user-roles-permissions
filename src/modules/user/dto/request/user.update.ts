import { check } from "../../../../shared";
import { validate } from "../../../../utils";


export class UpdateUserRequestDto {

    private constructor(
        public readonly id:number,
        public readonly name?:string,
        public readonly email?:string,
        public readonly password?:string, 
        public readonly rol?:number[],
    ){}

    static create(props: {[key:string]:any}): UpdateUserRequestDto{
        const {id, email, name, password, rol} = props;

        check.atLeastOne(name, email, password, rol);
        check.positiveInt(id, 'id').values;
        check.stringEmpty(name, 'name').optional;    
        check.email(email, 'email').optional;
        check.password(password, 'password').optional;
        const rolIds = check.arrayInteger(rol, 'rol id').optional;
 
        return new UpdateUserRequestDto(id, name?.trim(), email?.trim(), password, rolIds || undefined)
    }
}