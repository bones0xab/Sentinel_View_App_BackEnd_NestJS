import { Test, TestingModule } from '@nestjs/testing';
import { ThreattypesResolver } from './threattypes.resolver';

describe('ThreattypesResolver', () => {
  let resolver: ThreattypesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ThreattypesResolver],
    }).compile();

    resolver = module.get<ThreattypesResolver>(ThreattypesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
