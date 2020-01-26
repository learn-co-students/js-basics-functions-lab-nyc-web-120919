// Code your solution in this file!
function distanceFromHqInBlocks(someValue){
    return Math.abs(42 - someValue);
}

function distanceFromHqInFeet(someValue){
    return distanceFromHqInBlocks(someValue) * 264
}

function distanceTravelledInFeet(start, end){
    return Math.abs(start - end) * 264
}

function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination)
    switch(true) {
        case (distance <= 400):
            return 0;
            break; 
        case (distance < 2000 && distance > 400):
            return (distance - 400) *.02;
            break; 
        case (distance > 2000 && distance < 2500):
            return 25;
            break;
        case (distance > 2500): 
            return 'cannot travel that far' 
            break; 
    }
}