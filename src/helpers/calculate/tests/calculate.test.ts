import { calculate } from '../';

describe('Calculate', () => {
  it('works', () => {
    const x = calculate(1, 2);
    expect(x).toBe(3);
  });
});
