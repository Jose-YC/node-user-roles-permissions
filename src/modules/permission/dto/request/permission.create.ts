import { check } from "../../../../shared";

export class CreatePermissionDtos {

    private constructor(
        public readonly name:string,
        public readonly module:string,
    ){}

    static create(props: {[key:string]:any}): CreatePermissionDtos{
        const { name, module } = props;
        
        check.stringEmpty(name, "name").values;
        check.stringEmpty(module, "module").values;

        return new CreatePermissionDtos(name.trim().toLowerCase(), module.trim());
    }
}