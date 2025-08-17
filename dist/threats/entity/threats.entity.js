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
exports.threats = void 0;
const typeorm_1 = require("typeorm");
const incidents_entity_1 = require("../../incidents/entity/incidents.entity");
const services_entity_1 = require("../../services/entity/services.entity");
const threattypes_entity_1 = require("../../threattypes/entity/threattypes.entity");
const graphql_1 = require("@nestjs/graphql");
let threats = class threats {
    id;
    metadata;
    detectedAt;
    incidents;
    sourceService;
    targetService;
    threatType;
};
exports.threats = threats;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], threats.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'jsonb', nullable: true }),
    __metadata("design:type", Object)
], threats.prototype, "metadata", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp with time zone', default: () => 'now()' }),
    __metadata("design:type", Date)
], threats.prototype, "detectedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => incidents_entity_1.incidents, (incident) => incident.threats),
    __metadata("design:type", Array)
], threats.prototype, "incidents", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => services_entity_1.services, (service) => service.threats, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'source_service_id' }),
    __metadata("design:type", services_entity_1.services)
], threats.prototype, "sourceService", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => services_entity_1.services, (service) => service.threats, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'target_service_id' }),
    __metadata("design:type", services_entity_1.services)
], threats.prototype, "targetService", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => threattypes_entity_1.threattypes, (threatType) => threatType.threats),
    (0, typeorm_1.JoinColumn)({ name: 'threat_type_id' }),
    __metadata("design:type", threattypes_entity_1.threattypes)
], threats.prototype, "threatType", void 0);
exports.threats = threats = __decorate([
    (0, graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)('threats')
], threats);
//# sourceMappingURL=threats.entity.js.map