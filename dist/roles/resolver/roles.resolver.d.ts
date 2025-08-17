import { RolesService } from '../services/roles.service';
import { roles } from '../entity/roles.entity';
import { rolesInput } from '../inputs/roles.input';
export declare class RolesResolver {
    private readonly roleservice;
    constructor(roleservice: RolesService);
    getRoles(): Promise<roles[]>;
    getRole(name: rolesInput): Promise<roles | null>;
    createRole(data: rolesInput): Promise<roles>;
    updateRole(id: string, changes: rolesInput): Promise<roles | null>;
    deleteRole(id: string): Promise<roles | null>;
}
