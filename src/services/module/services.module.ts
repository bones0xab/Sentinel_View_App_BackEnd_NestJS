import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { services } from '../entity/services.entity';
import { ServicesService } from '../services/services.service';
import { ServicesResolver } from '../resolver/services.resolver';
@Module({
    imports: [TypeOrmModule.forFeature([services])],
    providers: [ServicesService, ServicesResolver],
    exports: [ServicesService]
})
export class ServicesModule {}
