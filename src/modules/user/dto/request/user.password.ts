import { check } from "../../../../shared";
import { validate } from "../../../../utils";

export class UpdatePasswordDtos {

    private constructor(
        public readonly id:number, 
        public readonly password:string, 
        public readonly oldPassword:string, 
    ){}

    static create(props: {[key:string]:any}): UpdatePasswordDtos{
        const { password, oldPassword, id } = props;

        check.positiveInt(id, 'id').values;
        check.password(password, 'password').values;
        check.stringEmpty(oldPassword, 'old password').values;

        return new UpdatePasswordDtos(id, password, oldPassword) 
    }
}