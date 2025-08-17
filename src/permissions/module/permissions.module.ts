import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { permissions } from '../entity/permissions.entity';
import { PermissionsService } from '../services/permissions.service';
import { PermissionsResolver } from '../resolver/permissions.resolver';
@Module({
    imports: [TypeOrmModule.forFeature([permissions])],
    providers: [PermissionsService, PermissionsResolver],
    exports: [PermissionsService]
})
export class PermissionsModule {}
