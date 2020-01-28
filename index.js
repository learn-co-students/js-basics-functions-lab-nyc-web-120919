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

// function calculatesFarePrice (start, destination) {
//     const distance = distanceTravelledInFeet(start, destination);
  
//     if (distance <= 400) {
//       return 0;
//     } else if (distance > 400 && distance <= 2000) {
//       return .02 * (distance - 400);
//     } else if (distance > 2000 && distance < 2500) {
//       return 25;
//     } else {
//       return 'cannot travel that far';
//     }
// }
//      this works boiiii, vscode drinking 2 much haterade
function calculatesFarePrice(start, end) {
    let value = distanceTravelledInFeet(start, end)
    let minimum = 400 > value
    let extra_payment = (value > 2000 && value < 2500)
    let over_charge = 25.00
    let normal_charge = (value - 400) * .02
    switch (minimum) {
        case true:
            return 0
        case false:
            if (value > 2500) {return `cannot travel that far`}
            return extra_payment == true ? over_charge : normal_charge
    }
}