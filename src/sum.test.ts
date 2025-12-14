// src/sum.test.ts

import { sumAllOfTheWorld } from './sum';

describe('sumAllOfTheWorld', () => {
  it('2 + 3 = 5 olmalı', () => {
    const result = sumAllOfTheWorld(2, 3);
    expect(result).toBe(5);
  });

  it('-5 + 10 = 5 olmalı', () => {
    const result = sumAllOfTheWorld(-5, 10);
    expect(result).toBe(5);
  });
});
