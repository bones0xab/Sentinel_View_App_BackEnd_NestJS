import { Test, TestingModule } from '@nestjs/testing';
import { ConsentsResolver } from './consents.resolver';

describe('ConsentsResolver', () => {
  let resolver: ConsentsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConsentsResolver],
    }).compile();

    resolver = module.get<ConsentsResolver>(ConsentsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
