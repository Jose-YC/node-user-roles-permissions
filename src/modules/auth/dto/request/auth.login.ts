import { check } from "../../../../shared";

export class LoginRequestDto {

    private constructor(
        public readonly email:string,
        public readonly password:string, 
    ){}

    static create(props: {[key:string]:any}): LoginRequestDto{
        const {email, password} = props;
        
        check.email(email, "email").values;
        check.stringEmpty(password, "password").values;

        return new LoginRequestDto(email, password);
    }
}