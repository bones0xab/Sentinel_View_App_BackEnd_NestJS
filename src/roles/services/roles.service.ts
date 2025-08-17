import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { roles } from '../entity/roles.entity';
import { Repository } from 'typeorm';
import { rolesInput } from '../inputs/roles.input';

@Injectable()
export class RolesService {

    constructor(@InjectRepository(roles) 
    private roleService : Repository<roles>){}



    async create(role : Partial<rolesInput>) : Promise<roles> {
        const newRole =  this.roleService.create(role);
        return await this.roleService.save(newRole)
    }

    async findAll() : Promise<roles[]> {
        return await this.roleService.find();
    }

    async findOneRole(name: Partial<rolesInput>) : Promise<roles | null> {
        const role =  await this.roleService.findOne({where : name})
        return role || null;
    }

    async update(id : string , rolename : Partial<rolesInput>) : Promise<roles | null> {
        await this.roleService.update(id, rolename)
        return await this.findOneRole(rolename)
    } 

    async delete(id : string) : Promise<roles | null> {
        // await this.roleService.delete(id)
        const role = this.roleService.findOne({where : {id}})

        if(!role) {
            throw new NotFoundException(`Role with id="${id}" not found`);
        }

        await this.roleService.delete(id)
        return role 
    }

}
