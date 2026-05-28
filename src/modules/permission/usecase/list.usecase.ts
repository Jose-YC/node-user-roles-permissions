import { List } from "../../../shared";
import { PermissionDatasource } from "../datasource/permission.datasource";
import { Permission, PermissionPaginateDtos } from "../dto";

interface options {
    page: number;
    limit: number;
    search?: string;
}

export class ListPermissionUsecase {

    public async execute(options: PermissionPaginateDtos): Promise<List<Permission>> {
        return await new PermissionDatasource().get(options);
    }
}