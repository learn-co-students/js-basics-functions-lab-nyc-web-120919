// Code your solution in this file!
function distanceFromHqInBlocks(x) {
    return Math.abs(42 - x);
}

function distanceFromHqInFeet(x) {
    return distanceFromHqInBlocks(x) * 264;
}

function distanceTravelledInFeet(x, y) {
    return Math.abs(x - y) * 264
}

function calculatesFarePrice (x, y) {
    const distance = distanceTravelledInFeet(x, y);
  
    if (distance <= 400) {
      return 0;
    } else if (distance > 400 && distance <= 2000) {
      return .02 * (distance - 400);
    } else if (distance > 2000 && distance < 2500) {
      return 25;
    } else {
      return 'cannot travel that far';
    }
  }