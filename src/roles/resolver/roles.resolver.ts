import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { RolesService } from '../services/roles.service';
import { roles } from '../entity/roles.entity';
import { rolesInput } from '../inputs/roles.input';

@Resolver(() => roles)
export class RolesResolver {

    constructor(private readonly roleservice :RolesService){}


    @Query(()=> [roles])
    async getRoles() : Promise<roles[]> {
        return this.roleservice.findAll()
    }


    @Query(() => roles)
    async getRole(@Args('name') name : rolesInput) : Promise<roles | null> {
        return this.roleservice.findOneRole(name);
    } 


    @Mutation(() => roles)
    async createRole(@Args('data') data : rolesInput) : Promise<roles> {
        return this.roleservice.create(data);
    }


    @Mutation(()=> roles)
    async updateRole(@Args('id') id : string, @Args('changes') changes : rolesInput) : Promise<roles | null>{ 
        return this.roleservice.update(id, changes);
    }   

    @Mutation(() => roles)
    async deleteRole(@Args('id') id : string) : Promise<roles | null>{
        return this.roleservice.delete(id)
    }


}
