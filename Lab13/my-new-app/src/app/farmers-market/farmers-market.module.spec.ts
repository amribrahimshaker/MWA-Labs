import { FarmersMarketModule } from './farmers-market.module';

describe('FarmersMarketModule', () => {
  let farmersMarketModule: FarmersMarketModule;

  beforeEach(() => {
    farmersMarketModule = new FarmersMarketModule();
  });

  it('should create an instance', () => {
    expect(farmersMarketModule).toBeTruthy();
  });
});
