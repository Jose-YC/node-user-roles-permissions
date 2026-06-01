import { RolDatasource } from "../datasource/rol.datasource";
import { UpdateRolDtos } from "../dto";

export class UpdateRolUsecase {

    public async execute(options: UpdateRolDtos): Promise<boolean> {
        return await new RolDatasource().update(options);
    }
}