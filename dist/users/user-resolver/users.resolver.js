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
exports.UsersResolver = void 0;
const user_service_service_1 = require("../user-service/user-service.service");
const graphql_1 = require("@nestjs/graphql");
const Users_1 = require("../user-entity/Users");
const user_input_1 = require("../user-input/user-input");
const auth_1 = require("../user-login/auth");
let UsersResolver = class UsersResolver {
    usersService;
    authSer;
    constructor(usersService, authSer) {
        this.usersService = usersService;
        this.authSer = authSer;
    }
    async getUsers() {
        return this.usersService.findAll();
    }
    async getOneUser(id) {
        return this.usersService.findById(id);
    }
    async updateUser(id, changes) {
        return this.usersService.update(id, changes);
    }
    async resetPassword(id, changes) {
        return this.usersService.update(id, changes);
    }
    async createUser(data) {
        console.log("This is inside nest : ", data);
        return this.usersService.create(data);
    }
    async delete(id) {
        return this.usersService.delete(id);
    }
    async login(username, password) {
        return await this.authSer.SingIn(username, password);
    }
};
exports.UsersResolver = UsersResolver;
__decorate([
    (0, graphql_1.Query)(() => [Users_1.Users]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "getUsers", null);
__decorate([
    (0, graphql_1.Query)(() => Users_1.Users),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.ID })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "getOneUser", null);
__decorate([
    (0, graphql_1.Mutation)(() => Users_1.Users),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.ID })),
    __param(1, (0, graphql_1.Args)('changes')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, user_input_1.UserInput]),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "updateUser", null);
__decorate([
    (0, graphql_1.Mutation)(() => Users_1.Users),
    __param(0, (0, graphql_1.Args)('userid')),
    __param(1, (0, graphql_1.Args)('changes')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, user_input_1.UserInput]),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "resetPassword", null);
__decorate([
    (0, graphql_1.Mutation)(() => Users_1.Users),
    __param(0, (0, graphql_1.Args)('data')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_input_1.UserInput]),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "createUser", null);
__decorate([
    (0, graphql_1.Mutation)(() => Users_1.Users),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.ID })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "delete", null);
__decorate([
    (0, graphql_1.Mutation)(() => auth_1.AuthResponse),
    __param(0, (0, graphql_1.Args)('username')),
    __param(1, (0, graphql_1.Args)('password')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "login", null);
exports.UsersResolver = UsersResolver = __decorate([
    (0, graphql_1.Resolver)(() => Users_1.Users),
    __metadata("design:paramtypes", [user_service_service_1.UserServiceService, user_service_service_1.AuthService])
], UsersResolver);
//# sourceMappingURL=users.resolver.js.map