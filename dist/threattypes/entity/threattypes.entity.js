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
exports.threattypes = void 0;
const typeorm_1 = require("typeorm");
const threats_entity_1 = require("../../threats/entity/threats.entity");
const graphql_1 = require("@nestjs/graphql");
let threattypes = class threattypes {
    id;
    name;
    threats;
};
exports.threattypes = threattypes;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], threattypes.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], threattypes.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => threats_entity_1.threats, (threat) => threat.threatType),
    __metadata("design:type", Array)
], threattypes.prototype, "threats", void 0);
exports.threattypes = threattypes = __decorate([
    (0, graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)("threat_types")
], threattypes);
//# sourceMappingURL=threattypes.entity.js.map