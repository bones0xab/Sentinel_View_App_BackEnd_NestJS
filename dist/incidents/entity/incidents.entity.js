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
exports.incidents = void 0;
const typeorm_1 = require("typeorm");
const threats_entity_1 = require("../../threats/entity/threats.entity");
const Users_1 = require("../../users/user-entity/Users");
const graphql_1 = require("@nestjs/graphql");
let incidents = class incidents {
    id;
    title;
    description;
    createdAt;
    status;
    threats;
    createdBy;
};
exports.incidents = incidents;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], incidents.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], incidents.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], incidents.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamptz', default: () => 'now()' }),
    __metadata("design:type", Date)
], incidents.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], incidents.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => threats_entity_1.threats, (threat) => threat.incidents),
    (0, typeorm_1.JoinTable)({
        name: 'incident_threats',
        joinColumn: { name: 'incident_id', referencedColumnName: 'id' },
        inverseJoinColumn: { name: 'threat_id', referencedColumnName: 'id' },
    }),
    __metadata("design:type", Array)
], incidents.prototype, "threats", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Users_1.Users, (user) => user.incidents, { onDelete: 'SET NULL' }),
    (0, typeorm_1.JoinColumn)({ name: 'created_by' }),
    __metadata("design:type", Users_1.Users)
], incidents.prototype, "createdBy", void 0);
exports.incidents = incidents = __decorate([
    (0, graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)()
], incidents);
//# sourceMappingURL=incidents.entity.js.map