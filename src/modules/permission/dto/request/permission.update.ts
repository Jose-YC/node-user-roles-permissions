import { check } from "../../../../shared";

export class UpdatePermissionRequestDto {

    private constructor(
        public readonly id:number,
        public readonly name?:string,
        public readonly module?:string,
    ){}

    get values(){
        const returnObj: {[key:string]: any}={}
        if (this.name) returnObj.name=this.name;
        if (this.module) returnObj.module=this.module;
        return returnObj;
    }

    static create(props: {[key:string]:any}): UpdatePermissionRequestDto{
        const { id, name, module } = props;

        check.atLeastOne(name, module)
        
        check.positiveInt(id, 'id').values;
        check.stringEmpty(name, 'name').optional;
        check.stringEmpty(module, 'module').optional;
        
        return new UpdatePermissionRequestDto(id, name?.trim().toLowerCase(), module?.trim());
    }
}