const sumNumbers = require('./index');

describe('Sum Numbers', function() {
  test('Adds two numbers', function() {
    expect(sumNumbers(2,3)).toEqual(5);
  });
});