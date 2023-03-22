const multiply = require('./multiply');

describe('multiply', () => {
  it('multiplies a and b', () => {
    expect(multiply(2, 3)).toBe(6);
  });
});