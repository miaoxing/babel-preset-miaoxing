const preset = require('../');

describe('preset', () => {
  test('basic', () => {
    const result = preset();

    expect(result).toBeInstanceOf(Object);

    expect(result.presets).toBeInstanceOf(Array);

    expect(result.plugins).toBeInstanceOf(Array);
  });
});
