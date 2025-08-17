import { AuditLogs } from "src/audits/entitie/Audits";
import { consents } from "src/consents/entity/consents.entity";
import { incidents } from "src/incidents/entity/incidents.entity";
import { riskScores } from "src/riskscores/entity/riskscores.entity";
import { roles } from "src/roles/entity/roles.entity";
export declare class Users {
    id: string;
    username: string;
    email: string;
    passwordHash: string;
    createdAt: Date;
    auditLogs: AuditLogs[];
    consents: consents[];
    incidents: incidents[];
    riskScores: riskScores[];
    roles: roles[];
}
