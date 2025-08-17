import { Test, TestingModule } from '@nestjs/testing';
import { ThreatsResolver } from './threats.resolver';

describe('ThreatsResolver', () => {
  let resolver: ThreatsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ThreatsResolver],
    }).compile();

    resolver = module.get<ThreatsResolver>(ThreatsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
