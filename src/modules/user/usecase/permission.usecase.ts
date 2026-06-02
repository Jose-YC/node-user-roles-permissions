import { UserPermissions } from "../dto";
import { UserDatasource } from "../datasource/user.datasource";


export class UserPermissionUsecase {

  async execute(id: number): Promise<UserPermissions> {
    return await new UserDatasource().getPermissions(id);
  }
}