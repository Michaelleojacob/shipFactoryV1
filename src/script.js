import './style.css';

function makeShip(leng) {
  const ship = Array.from(Array(leng).keys()).map((i) => i + 1);

  function logShipStats() {
    console.log(ship);
  }

  function hit(num) {
    ship[ship.indexOf(num)] = 'X';
  }

  function isSunk() {
    console.log(ship.every((item) => item === 'X'));
    ship.every((item) => item === 'X');
  }

  return { logShipStats, hit, isSunk };
}

const carrier = makeShip(5);

carrier.logShipStats();

carrier.hit(1);
carrier.hit(2);
carrier.hit(3);
carrier.hit(4);
carrier.hit(5);

carrier.logShipStats();

carrier.isSunk();
