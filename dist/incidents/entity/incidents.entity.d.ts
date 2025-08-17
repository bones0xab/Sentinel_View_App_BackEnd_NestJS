import { threats } from 'src/threats/entity/threats.entity';
import { Users } from 'src/users/user-entity/Users';
export declare class incidents {
    id: string;
    title: string;
    description: string;
    createdAt: Date;
    status: string;
    threats: threats[];
    createdBy: Users;
}
