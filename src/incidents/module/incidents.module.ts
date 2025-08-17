import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { incidents } from '../entity/incidents.entity';
import { IncidentsService } from '../services/incidents.service';
import { IncidentsResolver } from '../resolver/incidents.resolver';
@Module({
    imports: [TypeOrmModule.forFeature([incidents])],
    providers: [IncidentsService, IncidentsResolver],
    exports: [IncidentsService]
})export class IncidentsModule {}
