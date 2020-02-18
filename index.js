function distanceFromHqInBlocks(someValue) {
    return Math.abs(42 - someValue);
}

function distanceFromHqInFeet(someValue) {
   return distanceFromHqInBlocks(someValue) * 264;
}

function distanceTravelledInFeet(street1, street2) {
    return (Math.abs(street1 - street2)) * 264;
}

function calculatesFarePrice(start, destination) {
   let feet = distanceTravelledInFeet(start, destination);
   if (feet < 400) {
       return 0;
   } else if (feet > 400 && feet < 2000) {
       return parseFloat((feet.toFixed(2) * .02 - 8.00).toFixed(2));
   } else if (feet > 2000 && feet < 2500) {
       return 25;
   } else {
       return "cannot travel that far"
   }
}