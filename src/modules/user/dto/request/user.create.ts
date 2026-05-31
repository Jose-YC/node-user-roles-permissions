import { check, CustomError } from "../../../../shared";

export class CreateUserDtos {

    private constructor(
        public readonly email:string,
        public readonly name:string,
        public readonly password:string, 
        public readonly rol:number[],
    ){}

    static create(props: {[key:string]:any}): CreateUserDtos{
        const { email, name, password, rol } = props;

        check.stringEmpty(name, 'name').values;
        check.email(email, 'email').values;
        check.password(password, 'password').values;
        const rolIds = check.arrayInteger(rol, 'rol id').values;

        return new CreateUserDtos(email.trim(), name.trim(), password, rolIds) 
    }
}