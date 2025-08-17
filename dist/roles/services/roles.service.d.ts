import { roles } from '../entity/roles.entity';
import { Repository } from 'typeorm';
import { rolesInput } from '../inputs/roles.input';
export declare class RolesService {
    private roleService;
    constructor(roleService: Repository<roles>);
    create(role: Partial<rolesInput>): Promise<roles>;
    findAll(): Promise<roles[]>;
    findOneRole(name: Partial<rolesInput>): Promise<roles | null>;
    update(id: string, rolename: Partial<rolesInput>): Promise<roles | null>;
    delete(id: string): Promise<roles | null>;
}
