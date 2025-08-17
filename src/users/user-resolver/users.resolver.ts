import { AuthService, UserServiceService } from '../user-service/user-service.service';
import { Resolver, Query ,Args, ID, Mutation} from '@nestjs/graphql';
import { Users } from '../user-entity/Users';
import { UserInput } from '../user-input/user-input';
import { AuthResponse } from '../user-login/auth';

@Resolver(()=> Users) 
export class UsersResolver {
    constructor(private readonly usersService: UserServiceService, private authSer : AuthService){}


    @Query(()=> [Users])
    async getUsers() : Promise<Users[]> {
        return this.usersService.findAll();
    }

    @Query(() => Users)
    async getOneUser(@Args('id' , {type : () => ID}) id : string) : Promise<Users | null>{
        return this.usersService.findById(id);
    }

    @Mutation(() => Users)
    async updateUser(
        @Args('id', {type: () => ID}) id : string,
        @Args('changes') changes : UserInput) : Promise<Users | null> {
        return this.usersService.update(id,changes)
    }

    @Mutation(() => Users) 
    async resetPassword(@Args('userid') id: string, @Args('changes') changes :UserInput) : Promise<Users | null> {
        return this.usersService.update(id, changes);
    }

    @Mutation(()=> Users)
    async createUser(@Args('data') data : UserInput) : Promise<Users> { 
        console.log("This is inside nest : ", data);
        return this.usersService.create(data);
    } 

    @Mutation(() => Users)
    async delete(@Args('id', {type : () => ID}) id : string) : Promise<Users | null>{
        return this.usersService.delete(id);
    }


    @Mutation(()=> AuthResponse)
    async login(@Args('username') username : string, @Args('password') password : string) : Promise<AuthResponse> {
        return await this.authSer.SingIn(username, password);
    }


}
