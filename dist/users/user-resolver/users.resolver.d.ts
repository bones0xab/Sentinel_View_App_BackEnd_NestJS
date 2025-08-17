import { AuthService, UserServiceService } from '../user-service/user-service.service';
import { Users } from '../user-entity/Users';
import { UserInput } from '../user-input/user-input';
import { AuthResponse } from '../user-login/auth';
export declare class UsersResolver {
    private readonly usersService;
    private authSer;
    constructor(usersService: UserServiceService, authSer: AuthService);
    getUsers(): Promise<Users[]>;
    getOneUser(id: string): Promise<Users | null>;
    updateUser(id: string, changes: UserInput): Promise<Users | null>;
    resetPassword(id: string, changes: UserInput): Promise<Users | null>;
    createUser(data: UserInput): Promise<Users>;
    delete(id: string): Promise<Users | null>;
    login(username: string, password: string): Promise<AuthResponse>;
}
