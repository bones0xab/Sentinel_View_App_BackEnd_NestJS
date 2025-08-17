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
exports.consents = void 0;
const typeorm_1 = require("typeorm");
const datatypes_entity_1 = require("../../datatypes/entity/datatypes.entity");
const Users_1 = require("../../users/user-entity/Users");
const graphql_1 = require("@nestjs/graphql");
let consents = class consents {
    id;
    granted;
    timestamp;
    dataType;
    user;
};
exports.consents = consents;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], consents.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], consents.prototype, "granted", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamptz', default: () => 'now()' }),
    __metadata("design:type", Date)
], consents.prototype, "timestamp", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => datatypes_entity_1.dataTypes),
    (0, typeorm_1.JoinColumn)({ name: 'data_type_id' }),
    __metadata("design:type", datatypes_entity_1.dataTypes)
], consents.prototype, "dataType", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Users_1.Users, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'user_id' }),
    __metadata("design:type", Users_1.Users)
], consents.prototype, "user", void 0);
exports.consents = consents = __decorate([
    (0, graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)('consents')
], consents);
//# sourceMappingURL=consents.entity.js.map