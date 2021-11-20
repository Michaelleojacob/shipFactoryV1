//  5 ships carrier(5), battleship(4), destroyer(3), submarine(3), patrol(2)

// each ship should have a hit method/prop

// each ship should have a isSunk() method/prop

// should be able to call like so:
// carrier.hit(2)

function makeShip(leng) {
  // if (typeof leng !== 'number') return 'error';

  const ship = Array.from(Array(leng).keys()).map((i) => i + 1);

  const getStatus = () => {
    console.log(ship);
    return ship;
  };

  const hit = (num) => {
    if (typeof num !== 'number') return 'error';

    ship[ship.indexOf(num)] = 'X';
    return getStatus();
  };

  const isSunk = () => {
    console.log(ship.every((item) => item === 'X'));
    getStatus();
    return ship.every((item) => item === 'X');
  };

  return { getStatus, hit, isSunk };
}

export default makeShip;

const carrier = makeShip(5);
const battleship = makeShip(4);
const destroyer = makeShip(3);
const submarine = makeShip(3);
const patrol = makeShip(2);

export { carrier, battleship, destroyer, submarine, patrol };
