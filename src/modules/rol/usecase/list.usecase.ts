import { List } from "../../../shared";
import { RolDatasource } from "../datasource/rol.datasource";
import { Roles, RolPaginateDtos } from "../dto";

export class ListRolUsecase {

    public async execute(options: RolPaginateDtos): Promise<List<Roles>> {
        return await new RolDatasource().get(options);
    }
}