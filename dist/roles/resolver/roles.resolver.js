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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolesResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const roles_service_1 = require("../services/roles.service");
const roles_entity_1 = require("../entity/roles.entity");
const roles_input_1 = require("../inputs/roles.input");
let RolesResolver = class RolesResolver {
    roleservice;
    constructor(roleservice) {
        this.roleservice = roleservice;
    }
    async getRoles() {
        return this.roleservice.findAll();
    }
    async getRole(name) {
        return this.roleservice.findOneRole(name);
    }
    async createRole(data) {
        return this.roleservice.create(data);
    }
    async updateRole(id, changes) {
        return this.roleservice.update(id, changes);
    }
    async deleteRole(id) {
        return this.roleservice.delete(id);
    }
};
exports.RolesResolver = RolesResolver;
__decorate([
    (0, graphql_1.Query)(() => [roles_entity_1.roles]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RolesResolver.prototype, "getRoles", null);
__decorate([
    (0, graphql_1.Query)(() => roles_entity_1.roles),
    __param(0, (0, graphql_1.Args)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [roles_input_1.rolesInput]),
    __metadata("design:returntype", Promise)
], RolesResolver.prototype, "getRole", null);
__decorate([
    (0, graphql_1.Mutation)(() => roles_entity_1.roles),
    __param(0, (0, graphql_1.Args)('data')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [roles_input_1.rolesInput]),
    __metadata("design:returntype", Promise)
], RolesResolver.prototype, "createRole", null);
__decorate([
    (0, graphql_1.Mutation)(() => roles_entity_1.roles),
    __param(0, (0, graphql_1.Args)('id')),
    __param(1, (0, graphql_1.Args)('changes')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, roles_input_1.rolesInput]),
    __metadata("design:returntype", Promise)
], RolesResolver.prototype, "updateRole", null);
__decorate([
    (0, graphql_1.Mutation)(() => roles_entity_1.roles),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RolesResolver.prototype, "deleteRole", null);
exports.RolesResolver = RolesResolver = __decorate([
    (0, graphql_1.Resolver)(() => roles_entity_1.roles),
    __metadata("design:paramtypes", [roles_service_1.RolesService])
], RolesResolver);
//# sourceMappingURL=roles.resolver.js.map