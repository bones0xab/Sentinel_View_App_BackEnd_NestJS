import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { threattypes } from '../entity/threattypes.entity';
import { ThreattypesService } from '../services/threattypes.service';
import { ThreattypesResolver } from '../resolver/threattypes.resolver';
@Module({
    imports: [TypeOrmModule.forFeature([threattypes])],
    providers: [ThreattypesService, ThreattypesResolver],
    exports: [ThreattypesService]
})
export class ThreattypesModule {}
