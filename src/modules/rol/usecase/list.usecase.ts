import { List } from "../../../shared";
import { RolDatasource } from "../datasource/rol.datasource";
import { RoleListItemDto, RolePaginateDto } from "../dto";

export class ListRolUsecase {

    public async execute(options: RolePaginateDto): Promise<List<RoleListItemDto>> {
        return await new RolDatasource().get(options);
    }
}