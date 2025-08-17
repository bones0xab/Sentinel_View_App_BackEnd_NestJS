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
exports.riskScores = void 0;
const typeorm_1 = require("typeorm");
const Users_1 = require("../../users/user-entity/Users");
const graphql_1 = require("@nestjs/graphql");
let riskScores = class riskScores {
    id;
    score;
    factors;
    calculatedAt;
    user;
};
exports.riskScores = riskScores;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], riskScores.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('numeric', { nullable: true }),
    __metadata("design:type", Object)
], riskScores.prototype, "score", void 0);
__decorate([
    (0, typeorm_1.Column)('jsonb', { nullable: true }),
    __metadata("design:type", Object)
], riskScores.prototype, "factors", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamptz', default: () => 'now()' }),
    __metadata("design:type", Date)
], riskScores.prototype, "calculatedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Users_1.Users, (user) => user.riskScores, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'user_id' }),
    __metadata("design:type", Users_1.Users)
], riskScores.prototype, "user", void 0);
exports.riskScores = riskScores = __decorate([
    (0, graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)('risk_scores')
], riskScores);
//# sourceMappingURL=riskscores.entity.js.map