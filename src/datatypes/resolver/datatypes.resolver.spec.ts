import { Test, TestingModule } from '@nestjs/testing';
import { DatatypesResolver } from './datatypes.resolver';

describe('DatatypesResolver', () => {
  let resolver: DatatypesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DatatypesResolver],
    }).compile();

    resolver = module.get<DatatypesResolver>(DatatypesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
