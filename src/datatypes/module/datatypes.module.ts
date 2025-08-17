import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { dataTypes } from '../entity/datatypes.entity';
import { DatatypesService } from '../services/datatypes.service';
import { DatatypesResolver } from '../resolver/datatypes.resolver';
@Module({
    imports: [TypeOrmModule.forFeature([dataTypes])],
    providers: [DatatypesService, DatatypesResolver],
    exports: [DatatypesService]
})
export class DatatypesModule {}
