import { dataTypes } from 'src/datatypes/entity/datatypes.entity';
import { Users } from 'src/users/user-entity/Users';
export declare class consents {
    id: string;
    granted: boolean;
    timestamp: Date;
    dataType: dataTypes;
    user: Users;
}
