import { UserDatasource } from "../datasource/user.datasource";
import { UpdatePasswordDtos } from "../dto";

export class UpdatePasswordUserUsecase {

    public async execute(updatePassword: UpdatePasswordDtos): Promise<boolean> {
        return await new UserDatasource().password(updatePassword);
    }
}