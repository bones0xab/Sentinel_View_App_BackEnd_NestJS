import { Test, TestingModule } from '@nestjs/testing';
import { ThreattypesService } from './threattypes.service';

describe('ThreattypesService', () => {
  let service: ThreattypesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ThreattypesService],
    }).compile();

    service = module.get<ThreattypesService>(ThreattypesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
