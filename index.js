function distanceFromHqInBlocks(street) {
    let result;
    if (street < 42) {
        result = 42 + (street * -1);
    } else {
        result = street - 42;
    }
    return result;
}

function distanceFromHqInFeet(street) {
    let result = distanceFromHqInBlocks(street) * 264;
    return result; 
}

function distanceTravelledInFeet(street1, street2) {
    let result; 
    if (street1 < street2) {
        result = (street2 - street1) * 264;
    } else {
        result = (street1 - street2) * 264;
    }
    return result;
}

function calculatesFarePrice(start, destination) {
    let result = distanceTravelledInFeet(start, destination);
    if (result < 400) {
        result = 0;
    } else if (result >= 400 && result <= 2000) {
        result = ((result * .02) - 8);
        result = +result.toFixed(2);
    } else if (result > 2000 && result <= 2500) {
        result = 25;
    } else {
        result = "cannot travel that far";
    }
    return result;
}
