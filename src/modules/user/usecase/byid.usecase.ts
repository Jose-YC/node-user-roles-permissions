import { UserDatasource } from "../datasource/user.datasource";
import { User } from "../dto";

export class ByIdUserUsecase {

    public async execute(id: number): Promise<User> {
        return await new UserDatasource().getId(id);
    }
}