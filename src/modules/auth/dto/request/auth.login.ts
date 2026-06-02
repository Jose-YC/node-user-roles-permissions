import { check } from "../../../../shared";

export class LoginDtos {

    private constructor(
        public readonly email:string,
        public readonly password:string, 
    ){}

    static create(props: {[key:string]:any}): LoginDtos{
        const {email, password} = props;
        
        check.email(email, "email").values;
        check.password(password, "password").values;

        return new LoginDtos(email, password);
    }
}