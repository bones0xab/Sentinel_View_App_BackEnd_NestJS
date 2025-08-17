import { Users } from 'src/users/user-entity/Users';
export declare class riskScores {
    id: string;
    score: string | null;
    factors: object | null;
    calculatedAt: Date;
    user: Users;
}
