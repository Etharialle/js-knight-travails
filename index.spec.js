const { isPositionValid, knightMoves } = require('./index');

describe('Check for valid positions', function () {
  test('Checks to see if board positions are within the range [0-7]', function () {
    expect(isPositionValid([3,3])).toBe(true);
  });
  test('Checks if position[0] is out of range low', function () {
    expect(isPositionValid([-1,3])).toBe(false);
  });
  test('Checks if position[0] is out of range high', function () {
    expect(isPositionValid([9,3])).toBe(false);
  });
  test('Checks if position[1] is out of range low', function () {
    expect(isPositionValid([3,-1])).toBe(false);
  });
  test('Checks if position[1] is out of range high', function () {
    expect(isPositionValid([3,9])).toBe(false);
  });
  test('Check if position[1] does not exist', function () {
    expect(isPositionValid([3])).toBe(false);
  });
});

describe('knightMoves exit code checks', function () {
  test('Check if function executed successfully', function () {
    expect(knightMoves([0,0],[3,3])).toEqual(0);
  });
  test('Check if starting position is invalid', function () {
    expect(knightMoves([0,-5],[3,3])).toEqual(1);
  });
  test('Check if ending position is invalid', function () {
    expect(knightMoves([0,0],[3,-3])).toEqual(2);
  });
  test('Check if ending position is equal to starting position', function () {
    expect(knightMoves([1,1],[1,1])).toEqual(3);
  });
});
