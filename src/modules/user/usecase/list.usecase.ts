import { List } from "../../../shared";
import { UserDatasource } from "../datasource/user.datasource";
import { Users, UserPaginateDtos } from "../dto";

export class ListUserUsecase {

    public async execute(options: UserPaginateDtos): Promise<List<Users>> {
        return await new UserDatasource().get(options);
    }
}