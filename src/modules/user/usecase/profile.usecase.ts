import { UserDatasource } from "../datasource/user.datasource";
import { UpdateProfileDtos } from "../dto";

export class ProfileUserUsecase {

    public async execute(updateProfile: UpdateProfileDtos): Promise<boolean> {
        return await new UserDatasource().profile(updateProfile);
    }
}