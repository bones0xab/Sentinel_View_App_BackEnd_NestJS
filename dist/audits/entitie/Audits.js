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
exports.AuditLogs = void 0;
const typeorm_1 = require("typeorm");
const Users_1 = require("../../users/user-entity/Users");
const graphql_1 = require("@nestjs/graphql");
let AuditLogs = class AuditLogs {
    id;
    action;
    details;
    timestamp;
    user;
};
exports.AuditLogs = AuditLogs;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], AuditLogs.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], AuditLogs.prototype, "action", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'jsonb', nullable: true }),
    __metadata("design:type", Object)
], AuditLogs.prototype, "details", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamptz', default: () => 'now()' }),
    __metadata("design:type", Date)
], AuditLogs.prototype, "timestamp", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Users_1.Users, { onDelete: 'SET NULL', nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'user_id' }),
    __metadata("design:type", Users_1.Users)
], AuditLogs.prototype, "user", void 0);
exports.AuditLogs = AuditLogs = __decorate([
    (0, graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)('audit_logs')
], AuditLogs);
//# sourceMappingURL=Audits.js.map