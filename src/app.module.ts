import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import {TypeOrmModule } from '@nestjs/typeorm';
import { UserModuleTsModule } from './users/user-module/user-module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { UsersResolver } from './users/user-resolver/users.resolver';
import { AuditModule } from './audits/module/audit.module';
import { ConsentsModule } from './consents/module/consents.module';
import { ConsentsService } from './consents/services/consents.service';
import { DatatypesModule } from './datatypes/module/datatypes.module';
import { IncidentsModule } from './incidents/module/incidents.module';
import { PermissionsModule } from './permissions/module/permissions.module';
import { RiskscoresModule } from './riskscores/module/riskscores.module';
import { RolesModule } from './roles/module/roles.module';
import { ServicesModule } from './services/module/services.module';
import { ThreatsModule } from './threats/module/threats.module';
import { ThreattypesModule } from './threattypes/module/threattypes.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),

    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
      playground: true,
    }),
    // ConfigModule.forRoot({isGlobal: true}),
    TypeOrmModule.forRoot({
      type : 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '',
      database: 'Sentinel',
      autoLoadEntities: true, 
      synchronize: true, // Set to false in production
      
    }),
    UserModuleTsModule,AuditModule,ConsentsModule,DatatypesModule,IncidentsModule,PermissionsModule,RiskscoresModule,RolesModule,ServicesModule,ThreatsModule,ThreattypesModule],
  providers: [AppService, UsersResolver, ConsentsService],
})

export class AppModule {}
