import { Users } from 'src/users/user-entity/Users';
import { Repository } from 'typeorm';
import { UserInput } from '../user-input/user-input';
import { JwtService } from '@nestjs/jwt';
export declare class UserServiceService {
    private usersRepo;
    constructor(usersRepo: Repository<Users>);
    create(data: UserInput): Promise<Users>;
    findAll(): Promise<Users[]>;
    findById(id: string): Promise<Users | null>;
    delete(id: string): Promise<Users | null>;
    update(id: string, data: Partial<UserInput>): Promise<Users | null>;
    findByUsername(username: string, relations?: (keyof Users)[]): Promise<Users | null>;
}
export declare class AuthService {
    private userService;
    private jwtservice;
    constructor(userService: UserServiceService, jwtservice: JwtService);
    SingIn(username: string, password: string): Promise<{
        accessToken: string;
        user: Users;
    }>;
}
