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
exports.dataTypes = void 0;
const typeorm_1 = require("typeorm");
const consents_entity_1 = require("../../consents/entity/consents.entity");
const graphql_1 = require("@nestjs/graphql");
let dataTypes = class dataTypes {
    id;
    name;
    consents;
};
exports.dataTypes = dataTypes;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], dataTypes.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], dataTypes.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => consents_entity_1.consents, (consents) => consents.dataType),
    __metadata("design:type", Array)
], dataTypes.prototype, "consents", void 0);
exports.dataTypes = dataTypes = __decorate([
    (0, graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)("data_types")
], dataTypes);
//# sourceMappingURL=datatypes.entity.js.map