interface UserDto {
    id: number;
    name: string;
    email: string;
}

export class AuthDtos {

    constructor(
        public token:string,
        public user:UserDto,

    ){}

    static fromObject= (object:{[key:string]:any} ):AuthDtos => {
        const { user, token } = object;
        const { id, name, email } = user;

        return new AuthDtos( 
            token.trim() || "", 
            {
                id: Number(id) || 0,
                name: name?.trim() || "",
                email: email?.trim() || "",
            }
        );
    }
}