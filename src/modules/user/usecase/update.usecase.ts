import { UserDatasource } from "../datasource/user.datasource";
import { UpdateUserDtos } from "../dto";

export class UpdateUserUsecase {

    public async execute(options: UpdateUserDtos): Promise<boolean> {
        return await new UserDatasource().update(options);
    }
}