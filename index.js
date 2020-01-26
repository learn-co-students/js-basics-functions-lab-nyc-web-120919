// Code your solution in this file!
function distanceFromHqInBlocks(block) {
    if (block >= 42) {
        return block - 42;
    }
    else {
        return 42 - block;
    }
}

function distanceFromHqInFeet(block) {
    return distanceFromHqInBlocks(block) * 264;
}

function distanceTravelledInFeet(start, stop) {
    if (start >= stop) {
        return (start-stop) * 264;
    } 
    else {
        return (stop-start) * 264;
    }
}

function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start,destination);
    if (distance < 400) {
        return 0;
    }
    else if (distance >= 400 && distance <= 2000) {
        return (distance - 400) *.02;
    }
    else if (distance > 2000 && distance < 2500) {
        return 25;
    }
    else {
        return 'cannot travel that far'
    }
}