import { check } from "../../../../shared";

export class RegisterRequestDto {

    private constructor(
        public readonly email:string,
        public readonly name:string,
        public readonly password:string, 
    ){}

    static create(props: {[key:string]:any}): RegisterRequestDto{
        const {email, name, password} = props;

        check.stringEmpty(name, "name").values;
        check.email(email, "email").values;
        check.password(password, "password").values;

        return new RegisterRequestDto(email, name, password);
    }
}