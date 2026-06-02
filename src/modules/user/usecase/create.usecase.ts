import { UserDatasource } from "../datasource/user.datasource";
import { CreateUserDtos } from "../dto";

export class CreateUserUsecase {

    public async execute(options: CreateUserDtos): Promise<boolean> {
        return await new UserDatasource().create(options);
    }
}