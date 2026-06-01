import { RolDatasource } from "../datasource/rol.datasource";
import { CreateRolDtos } from "../dto";

export class CreateRolUsecase {

    public async execute(options: CreateRolDtos): Promise<boolean> {
        return await new RolDatasource().create(options);
    }
}