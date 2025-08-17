import { permissions } from 'src/permissions/entity/permissions.entity';
import { Users } from 'src/users/user-entity/Users';
export declare class roles {
    id: string;
    name: string;
    permissions: permissions[];
    users: Users[];
}
