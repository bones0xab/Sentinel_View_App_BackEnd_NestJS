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
exports.AuthService = exports.UserServiceService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const Users_1 = require("../user-entity/Users");
const typeorm_2 = require("typeorm");
const bcrypt = require("bcrypt");
const jwt_1 = require("@nestjs/jwt");
let UserServiceService = class UserServiceService {
    usersRepo;
    constructor(usersRepo) {
        this.usersRepo = usersRepo;
    }
    async create(data) {
        if (data.passwordHash) {
            data.passwordHash = await bcrypt.hash(data.passwordHash, 10);
        }
        const user = this.usersRepo.create(data);
        return await this.usersRepo.save(user);
    }
    async findAll() {
        return this.usersRepo.find({ relations: ['roles'], select: ['id', 'username', 'email', 'passwordHash', 'roles', 'consents', 'createdAt'] });
    }
    async findById(id) {
        return this.usersRepo.findOne({
            where: { id },
        });
    }
    async delete(id) {
        const user = this.usersRepo.findOne({ where: { id } });
        console.log("DELETED USER :", user);
        if (!user) {
            throw new common_1.NotFoundException(`User with id="${id}" not found`);
        }
        await this.usersRepo.delete(id);
        return user;
    }
    async update(id, data) {
        const user = await this.usersRepo.findOne({
            where: { id },
            relations: ['roles'],
        });
        if (!user)
            return null;
        Object.assign(user, data);
        if (data.roles) {
            const existingRoleIds = new Set(user.roles.map(r => r.id));
            const newRoles = data.roles
                .filter(role => !existingRoleIds.has(role.id))
                .map(role => ({ id: role.id }));
            user.roles = [...user.roles, ...newRoles];
        }
        await this.usersRepo.save(user);
        return this.findById(id);
    }
    async findByUsername(username, relations = []) {
        return this.usersRepo.findOne({
            where: { username },
            relations,
        });
    }
};
exports.UserServiceService = UserServiceService;
exports.UserServiceService = UserServiceService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(Users_1.Users)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UserServiceService);
let AuthService = class AuthService {
    userService;
    jwtservice;
    constructor(userService, jwtservice) {
        this.userService = userService;
        this.jwtservice = jwtservice;
    }
    async SingIn(username, password) {
        const user = await this.userService.findByUsername(username, ['roles']);
        if (!user)
            throw new common_1.UnauthorizedException();
        const passwordMatches = await bcrypt.compare(password, user.passwordHash);
        if (!passwordMatches)
            throw new common_1.UnauthorizedException('Invalid credentials');
        const payload = { sub: user.id, username: user.username };
        return { accessToken: this.jwtservice.sign(payload), user };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [UserServiceService, jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=user-service.service.js.map