import { check } from "../../../../shared";

export class UpdateProfileRequestDto {

    private constructor(
        public readonly id:number,
        public readonly name?:string,
    ){}

    get values(){
        const returnObj: {[key:string]: any}={}
        if (this.name) returnObj.name=this.name;
        return returnObj;
    }

    static create(props: {[key:string]:any}): UpdateProfileRequestDto{
        const { id, name } = props;

        check.atLeastOne(name);
        check.positiveInt(id, 'id').values;
        check.stringEmpty(name, 'name').optional;    

        return new UpdateProfileRequestDto(id, name?.trim())
    }
}