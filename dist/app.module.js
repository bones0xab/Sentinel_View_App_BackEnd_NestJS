"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
const typeorm_1 = require("@nestjs/typeorm");
const user_module_1 = require("./users/user-module/user-module");
const graphql_1 = require("@nestjs/graphql");
const apollo_1 = require("@nestjs/apollo");
const path_1 = require("path");
const users_resolver_1 = require("./users/user-resolver/users.resolver");
const audit_module_1 = require("./audits/module/audit.module");
const consents_module_1 = require("./consents/module/consents.module");
const consents_service_1 = require("./consents/services/consents.service");
const datatypes_module_1 = require("./datatypes/module/datatypes.module");
const incidents_module_1 = require("./incidents/module/incidents.module");
const permissions_module_1 = require("./permissions/module/permissions.module");
const riskscores_module_1 = require("./riskscores/module/riskscores.module");
const roles_module_1 = require("./roles/module/roles.module");
const services_module_1 = require("./services/module/services.module");
const threats_module_1 = require("./threats/module/threats.module");
const threattypes_module_1 = require("./threattypes/module/threattypes.module");
const config_1 = require("@nestjs/config");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot(),
            graphql_1.GraphQLModule.forRoot({
                driver: apollo_1.ApolloDriver,
                autoSchemaFile: (0, path_1.join)(process.cwd(), 'src/schema.gql'),
                sortSchema: true,
                playground: true,
            }),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: 'localhost',
                port: 5432,
                username: 'postgres',
                password: '',
                database: 'Sentinel',
                autoLoadEntities: true,
                synchronize: true,
            }),
            user_module_1.UserModuleTsModule, audit_module_1.AuditModule, consents_module_1.ConsentsModule, datatypes_module_1.DatatypesModule, incidents_module_1.IncidentsModule, permissions_module_1.PermissionsModule, riskscores_module_1.RiskscoresModule, roles_module_1.RolesModule, services_module_1.ServicesModule, threats_module_1.ThreatsModule, threattypes_module_1.ThreattypesModule
        ],
        providers: [app_service_1.AppService, users_resolver_1.UsersResolver, consents_service_1.ConsentsService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map