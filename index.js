// Code your solution in this file!

function distanceFromHqInBlocks(distance) {
    let hq_block = 42
    let total_distance_in_block = Math.abs(hq_block - distance)
    return total_distance_in_block
}

function distanceFromHqInFeet(feet) {
    let distance = distanceFromHqInBlocks(feet) * 264
    return distance
}

function distanceTravelledInFeet(start, end) {
    if (start > end) {
        let v = (start - end) * 264
        return v
    } else {
        let v = (end - start) * 264
        return v
    }
}

function calculatesFarePrice (start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
  
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
//      this works boiiii, vscode drinking 2 much haterade
// function calculateFarePrice(start, end) {
//     value = distanceTravelledInFeet(start, end)
//     minimum = 400 > value
//     extra_payment = (value > 2000 && value < 2500)
//     over_charge = value * 25.00
//     normal_charge = value * .02
//     switch (minimum) {
//         case true:
//             return "You get a free sample."
//         case false:
//             if (value > 2500) {return `No sorry your ride is over our limit`}
//             if (extra_payment == true) {return over_charge} else { return normal_charge }
//     }
// }