import { Users } from "src/users/user-entity/Users";
export declare class AuditLogs {
    id: string;
    action: string;
    details?: object;
    timestamp: Date;
    user: Users;
}
