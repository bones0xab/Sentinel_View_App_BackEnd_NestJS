"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users = void 0;
const typeorm_1 = require("typeorm");
const Audits_1 = require("../../audits/entitie/Audits");
const consents_entity_1 = require("../../consents/entity/consents.entity");
const incidents_entity_1 = require("../../incidents/entity/incidents.entity");
const riskscores_entity_1 = require("../../riskscores/entity/riskscores.entity");
const roles_entity_1 = require("../../roles/entity/roles.entity");
const graphql_1 = require("@nestjs/graphql");
let Users = class Users {
    id;
    username;
    email;
    passwordHash;
    createdAt;
    auditLogs;
    consents;
    incidents;
    riskScores;
    roles;
};
exports.Users = Users;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.ID),
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], Users.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], Users.prototype, "username", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], Users.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Users.prototype, "passwordHash", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)({ type: "timestamp", default: () => "now()" }),
    __metadata("design:type", Date)
], Users.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Audits_1.AuditLogs, (auditLogs) => auditLogs.user),
    __metadata("design:type", Array)
], Users.prototype, "auditLogs", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => consents_entity_1.consents, (consents) => consents.user),
    __metadata("design:type", Array)
], Users.prototype, "consents", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => incidents_entity_1.incidents, (incidents) => incidents.createdBy),
    __metadata("design:type", Array)
], Users.prototype, "incidents", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => riskscores_entity_1.riskScores, (riskScores) => riskScores.user),
    __metadata("design:type", Array)
], Users.prototype, "riskScores", void 0);
__decorate([
    (0, graphql_1.Field)(() => [roles_entity_1.roles], { nullable: true }),
    (0, typeorm_1.ManyToMany)(() => roles_entity_1.roles, r => r.users, {
        cascade: true,
    }),
    (0, typeorm_1.JoinTable)({
        name: 'user_roles',
        joinColumn: {
            name: 'user_id',
            referencedColumnName: 'id',
        },
        inverseJoinColumn: {
            name: 'role_id',
            referencedColumnName: 'id',
        },
    }),
    __metadata("design:type", Array)
], Users.prototype, "roles", void 0);
exports.Users = Users = __decorate([
    (0, typeorm_1.Entity)("users"),
    (0, graphql_1.ObjectType)()
], Users);
//# sourceMappingURL=Users.js.map