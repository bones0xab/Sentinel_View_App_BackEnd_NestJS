import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { threats } from '../entity/threats.entity';
import { ThreatsService } from '../services/threats.service';
import { ThreatsResolver } from '../resolver/threats.resolver';
@Module({
    imports: [TypeOrmModule.forFeature([threats])],
    providers: [ThreatsService, ThreatsResolver],
    exports: [ThreatsService]
})
export class ThreatsModule {}
