import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/users/user-entity/Users';
import { ExplainVerbosity, Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { UserInput } from '../user-input/user-input';
import { threadId } from 'worker_threads';
import { JwtService } from '@nestjs/jwt';
import { access } from 'fs';
import { roles } from 'src/roles/entity/roles.entity';


@Injectable()
export class UserServiceService {

constructor(
    @InjectRepository(Users)
    private usersRepo : Repository<Users>){}

    async create(data : UserInput) : Promise<Users> {

        if(data.passwordHash) {
            data.passwordHash =  await bcrypt.hash(data.passwordHash, 10)
            // delete data.passwordHash 
        }
        const user = this.usersRepo.create(data)
        return await this.usersRepo.save(user)
    }

    async findAll() : Promise<Users[]> {
        return this.usersRepo.find({ relations: ['roles'],select : ['id', 'username' , 'email' , 'passwordHash', 'roles', 'consents', 'createdAt']});
    }

    async findById(id : string) : Promise<Users | null> {
        return this.usersRepo.findOne({
            where : {id},
        });
    }

    
    
    async delete(id: string) : Promise<Users | null> {
        const user = this.usersRepo.findOne({where : {id}})

        console.log("DELETED USER :",user);

        if(!user) {
            throw new NotFoundException(`User with id="${id}" not found`);
        }
        
        await this.usersRepo.delete(id)
        return user
    }

    
    
      
    async update(id: string, data: Partial<UserInput>): Promise<Users | null> {
        const user = await this.usersRepo.findOne({
            where: { id },
            relations: ['roles'],
        });
    
        if (!user) return null;
    
        // Overwrite scalar fields
        Object.assign(user, data);
    
        // Handle roles update if provided
        if (data.roles) {
            // Create a map of existing role IDs for quick lookup
            const existingRoleIds = new Set(user.roles.map(r => r.id));
            
            // Add only new roles that don't already exist
            const newRoles = data.roles
                .filter(role => !existingRoleIds.has(role.id))
                .map(role => ({ id: role.id } as roles));
            
            user.roles = [...user.roles, ...newRoles];
        }
    
        await this.usersRepo.save(user);
        return this.findById(id);
    }
    

async findByUsername(
    username: string,
    relations: (keyof Users)[] = []
  ): Promise<Users | null> {
    return this.usersRepo.findOne({
      where: { username },
      relations,              
    });
  }
  
}

@Injectable()

export class AuthService {

    constructor(private userService : UserServiceService,private jwtservice : JwtService){}

    async SingIn(username: string, password: string){
     const user = await this.userService.findByUsername(username, ['roles']);
     if(!user) throw new UnauthorizedException();

     
     
    const passwordMatches = await bcrypt.compare(password, user.passwordHash);
    if (!passwordMatches) throw new UnauthorizedException('Invalid credentials');

    const payload = { sub : user.id , username: user.username};

    
    return {accessToken: this.jwtservice.sign(payload), user}
    

    }
}


