import { AuthDatasource } from "../datasource/auth.datasource";
import { AuthDtos, LoginDtos } from "../dto";

export class LoginUseCase {

    execute(login: LoginDtos): Promise<AuthDtos> {
        return new AuthDatasource().login(login);
    }
}