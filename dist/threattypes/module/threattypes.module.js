"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreattypesModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const threattypes_entity_1 = require("../entity/threattypes.entity");
const threattypes_service_1 = require("../services/threattypes.service");
const threattypes_resolver_1 = require("../resolver/threattypes.resolver");
let ThreattypesModule = class ThreattypesModule {
};
exports.ThreattypesModule = ThreattypesModule;
exports.ThreattypesModule = ThreattypesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([threattypes_entity_1.threattypes])],
        providers: [threattypes_service_1.ThreattypesService, threattypes_resolver_1.ThreattypesResolver],
        exports: [threattypes_service_1.ThreattypesService]
    })
], ThreattypesModule);
//# sourceMappingURL=threattypes.module.js.map