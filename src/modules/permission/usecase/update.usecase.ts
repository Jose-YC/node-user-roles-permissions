import { PermissionDatasource } from "../datasource/permission.datasource";
import { UpdatePermissionDtos } from "../dto";

interface options {
    id: number;
    name?: string;
    module?: string;
}

export class UpdatePermissionUsecase {

    public async execute(options: UpdatePermissionDtos): Promise<boolean> {
        return await new PermissionDatasource().update(options);
    }
}