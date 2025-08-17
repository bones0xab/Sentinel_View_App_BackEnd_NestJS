import { Test, TestingModule } from '@nestjs/testing';
import { RiskscoresResolver } from './riskscores.resolver';

describe('RiskscoresResolver', () => {
  let resolver: RiskscoresResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RiskscoresResolver],
    }).compile();

    resolver = module.get<RiskscoresResolver>(RiskscoresResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
