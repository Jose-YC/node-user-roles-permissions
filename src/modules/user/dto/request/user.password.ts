import { check } from "../../../../shared";
import { validate } from "../../../../utils";

export class UpdatePasswordRequestDto {

    private constructor(
        public readonly id:number, 
        public readonly password:string, 
        public readonly oldPassword:string, 
    ){}

    static create(props: {[key:string]:any}): UpdatePasswordRequestDto{
        const { password, oldPassword, id } = props;

        check.positiveInt(id, 'id').values;
        check.password(password, 'password').values;
        check.stringEmpty(oldPassword, 'old password').values;

        return new UpdatePasswordRequestDto(id, password, oldPassword) 
    }
}