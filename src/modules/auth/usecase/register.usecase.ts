import { AuthDatasource } from "../datasource/auth.datasource";
import { RegisterDtos, AuthDtos } from "../dto";

export class RegisterUseCase {

    execute(register: RegisterDtos): Promise<AuthDtos> {
        return new AuthDatasource().register(register);
    }
}