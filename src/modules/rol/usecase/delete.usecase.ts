import { RolDatasource } from "../datasource/rol.datasource";

export class DeleteRolUsecase {

    public async execute(id: number): Promise<boolean> {
        return await new RolDatasource().delete(id);
    }
}