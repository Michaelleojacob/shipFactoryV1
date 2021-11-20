import './style.css';

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
    ship.every((item) => item === 'X');
    return getStatus();
  };

  return { getStatus, hit, isSunk };
}

const carrier = makeShip(5);

console.log(carrier);

carrier.getStatus();

carrier.hit(1);
carrier.hit(2);
carrier.hit(3);
carrier.hit(4);
carrier.hit(5);

carrier.isSunk();
