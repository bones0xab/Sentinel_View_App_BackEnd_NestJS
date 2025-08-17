"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsentsModule = void 0;
const common_1 = require("@nestjs/common");
const consents_entity_1 = require("../entity/consents.entity");
const typeorm_1 = require("@nestjs/typeorm");
const consents_service_1 = require("../services/consents.service");
const consents_resolver_1 = require("../resolver/consents.resolver");
let ConsentsModule = class ConsentsModule {
};
exports.ConsentsModule = ConsentsModule;
exports.ConsentsModule = ConsentsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([consents_entity_1.consents])],
        providers: [consents_service_1.ConsentsService, consents_resolver_1.ConsentsResolver],
        exports: [consents_service_1.ConsentsService]
    })
], ConsentsModule);
//# sourceMappingURL=consents.module.js.map