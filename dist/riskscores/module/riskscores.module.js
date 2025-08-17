"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RiskscoresModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const riskscores_entity_1 = require("../entity/riskscores.entity");
const riskscores_service_1 = require("../services/riskscores.service");
const riskscores_resolver_1 = require("../resolver/riskscores.resolver");
let RiskscoresModule = class RiskscoresModule {
};
exports.RiskscoresModule = RiskscoresModule;
exports.RiskscoresModule = RiskscoresModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([riskscores_entity_1.riskScores])],
        providers: [riskscores_service_1.RiskscoresService, riskscores_resolver_1.RiskscoresResolver],
        exports: [riskscores_service_1.RiskscoresService]
    })
], RiskscoresModule);
//# sourceMappingURL=riskscores.module.js.map