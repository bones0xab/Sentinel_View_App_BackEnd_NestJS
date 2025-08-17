import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { roles } from '../entity/roles.entity';
import { RolesService } from '../services/roles.service';
import { RolesResolver } from '../resolver/roles.resolver';
@Module({
    imports: [TypeOrmModule.forFeature([roles])],
    providers: [RolesService, RolesResolver],
    exports: [RolesService]
})
export class RolesModule {}
