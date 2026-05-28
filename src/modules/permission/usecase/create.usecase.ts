import { PermissionDatasource } from "../datasource/permission.datasource";
import { CreatePermissionDtos } from "../dto";

interface options {
    name: string;
    module: string;
}

export class CreatePermissionUsecase {

    public async execute(options: CreatePermissionDtos): Promise<boolean> {
        return await new PermissionDatasource().create(options);
    }
}