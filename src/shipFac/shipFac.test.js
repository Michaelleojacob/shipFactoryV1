import makeShip, { carrier, battleship, destroyer, submarine, patrol } from './shipFac';

//* testing constructor

xtest('makeShip() param should only be number', () => {
  expect(makeShip('lol')).toBe('error');
});
xtest('makeShip() param should only be number', () => {
  expect(makeShip('4')).toBe('error');
});

//! this no longer work because makeShip is no longer has return ship
xtest('makeShip(4) should return an array', () => {
  expect(makeShip(4)).toStrictEqual([1, 2, 3, 4]);
});
xtest('makeShip(2) should return an array', () => {
  expect(makeShip(2)).toStrictEqual([1, 2]);
});

//* testing length

test('makeShip(4).getStatus should return an array', () => {
  expect(makeShip(4).getStatus()).toStrictEqual([1, 2, 3, 4]);
});
test('makeShip(2).getStatus should return an array', () => {
  expect(makeShip(2).getStatus()).toStrictEqual([1, 2]);
});

test('carrier should be [1,2,3,4,5]', () => {
  expect(carrier.getStatus()).toStrictEqual([1, 2, 3, 4, 5]);
});
test('battleship should be [1,2,3,4]', () => {
  expect(battleship.getStatus()).toStrictEqual([1, 2, 3, 4]);
});
test('destroyer should be [1,2,3]', () => {
  expect(destroyer.getStatus()).toStrictEqual([1, 2, 3]);
});
test('submarine should be [1,2,3]', () => {
  expect(submarine.getStatus()).toStrictEqual([1, 2, 3]);
});
test('patrol should be [1,2]', () => {
  expect(patrol.getStatus()).toStrictEqual([1, 2]);
});

//* testing hit

test('hit should only take number params', () => {
  expect(makeShip(2).hit('hello world')).toBe('error');
});
test('makeShip(2).hit(1) should return [X, 2]', () => {
  expect(makeShip(2).hit(1)).toStrictEqual(['X', 2]);
});
test('makeShip(4).hit(4) should return [1,2,3,X]', () => {
  expect(makeShip(4).hit(4)).toStrictEqual([1, 2, 3, 'X']);
});

const mockShip = makeShip(2);
mockShip.hit(1);
mockShip.hit(2);

test('mockship should return [X, X]', () => {
  expect(mockShip.getStatus()).toStrictEqual(['X', 'X']);
});
