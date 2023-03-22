const searchCandies = require('./searchCandies');

describe('searchCandies', () => {
  it('shows 2 candies', () => {
    expect(searchCandies('Ma', 10)).toEqual(['Mars', 'Maltesers']);
  });

  it('shows one candy', () => {
    expect(searchCandies('Ma', 2)).toEqual(['Mars']);
  });

  it('is case insensitive', () => {
    expect(searchCandies('ma', 10)).toEqual(['Mars','Maltesers']);
  });
})