import { rolesInput } from 'src/roles/inputs/roles.input';
export declare class UserInput {
    id?: string;
    username?: string;
    email?: string;
    passwordHash?: string;
    createdAt?: Date;
    roles?: rolesInput[];
}
