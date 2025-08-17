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
exports.roles = void 0;
const typeorm_1 = require("typeorm");
const permissions_entity_1 = require("../../permissions/entity/permissions.entity");
const Users_1 = require("../../users/user-entity/Users");
const graphql_1 = require("@nestjs/graphql");
let roles = class roles {
    id;
    name;
    permissions;
    users;
};
exports.roles = roles;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.ID),
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], roles.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], roles.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => permissions_entity_1.permissions, (permission) => permission.roles),
    __metadata("design:type", Array)
], roles.prototype, "permissions", void 0);
__decorate([
    (0, graphql_1.Field)(() => [Users_1.Users]),
    (0, typeorm_1.ManyToMany)(() => Users_1.Users, (user) => user.roles),
    __metadata("design:type", Array)
], roles.prototype, "users", void 0);
exports.roles = roles = __decorate([
    (0, graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)('roles')
], roles);
//# sourceMappingURL=roles.entity.js.map