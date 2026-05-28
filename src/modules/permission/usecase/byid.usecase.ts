import { PermissionDatasource } from "../datasource/permission.datasource";
import { Permission } from "../dto";

export class ByIdPermissionUsecase {

    public async execute(id: number): Promise<Permission> {
        return await new PermissionDatasource().getId(id);
    }
}