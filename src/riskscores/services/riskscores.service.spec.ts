import { Test, TestingModule } from '@nestjs/testing';
import { RiskscoresService } from './riskscores.service';

describe('RiskscoresService', () => {
  let service: RiskscoresService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RiskscoresService],
    }).compile();

    service = module.get<RiskscoresService>(RiskscoresService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
