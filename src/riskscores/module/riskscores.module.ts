import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { riskScores } from '../entity/riskscores.entity';
import { RiskscoresService } from '../services/riskscores.service';
import { RiskscoresResolver } from '../resolver/riskscores.resolver';
@Module({
    imports: [TypeOrmModule.forFeature([riskScores])],
    providers: [RiskscoresService, RiskscoresResolver],
    exports: [RiskscoresService]

})
export class RiskscoresModule {}
