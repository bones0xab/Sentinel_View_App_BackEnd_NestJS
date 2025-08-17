"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatatypesModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const datatypes_entity_1 = require("../entity/datatypes.entity");
const datatypes_service_1 = require("../services/datatypes.service");
const datatypes_resolver_1 = require("../resolver/datatypes.resolver");
let DatatypesModule = class DatatypesModule {
};
exports.DatatypesModule = DatatypesModule;
exports.DatatypesModule = DatatypesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([datatypes_entity_1.dataTypes])],
        providers: [datatypes_service_1.DatatypesService, datatypes_resolver_1.DatatypesResolver],
        exports: [datatypes_service_1.DatatypesService]
    })
], DatatypesModule);
//# sourceMappingURL=datatypes.module.js.map