import { PlayService } from './play.service';

describe('Play Service', () => {

  let playService: PlayService;

  beforeAll(() => {
    playService = new PlayService();
  });

  it('should initialize the seed to defined value', () => {
    expect(playService.getSeed).toBeDefined();
  });

  it('should initialize the prev gen seed to undefined value', () => {
    expect(playService.previousGenSeed).toBeUndefined();
  });

  it('should initialize ticker to undefined value', () => {
    expect(playService.ticker).toBeUndefined();
  });

  it('should initialize tickerspeed to 500 value', () => {
    expect(playService.tickerSpeed).toEqual(500);
  });

});
