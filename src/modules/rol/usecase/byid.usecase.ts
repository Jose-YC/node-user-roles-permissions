import { RolDatasource } from "../datasource/rol.datasource";
import { Rol } from "../dto";

export class ByIdRolUsecase {

    public async execute(id: number): Promise<Rol> {
        return await new RolDatasource().getId(id);
    }
}