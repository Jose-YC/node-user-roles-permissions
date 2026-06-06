import { check } from "../../../../shared";

export class CreatePermissionRequestDto {

    private constructor(
        public readonly name:string,
        public readonly module:string,
    ){}

    static create(props: {[key:string]:any}): CreatePermissionRequestDto{
        const { name, module } = props;
        
        check.stringEmpty(name, "name").values;
        check.stringEmpty(module, "module").values;

        return new CreatePermissionRequestDto(name.trim().toLowerCase(), module.trim());
    }
}