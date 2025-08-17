import { Module } from '@nestjs/common';
import { consents } from '../entity/consents.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConsentsService } from '../services/consents.service';
import { ConsentsResolver } from '../resolver/consents.resolver';
@Module({
    imports: [TypeOrmModule.forFeature([consents])],
    providers: [ConsentsService, ConsentsResolver],
    exports: [ConsentsService]
})
export class ConsentsModule {
   
}
