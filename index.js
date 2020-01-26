function distanceFromHqInBlocks(endBlock) {
    return distanceInBlocks(42, endBlock)
}

function distanceFromHqInFeet(value) {
    let distInBlocks = distanceFromHqInBlocks(value);
    return distanceInFeet(distInBlocks);
}

function distanceTravelledInFeet(startBlock, endBlock) {
    let distInBlocks = distanceInBlocks(startBlock, endBlock);
    return distanceInFeet(distInBlocks);
}

function calculatesFarePrice(startBlock, endBlock) {
    let distInFeet = distanceTravelledInFeet(startBlock, endBlock);
    
    if (distInFeet <=400 ) {
        return 0;
    } else if (distInFeet <= 2000) {
        return (distInFeet - 400) * 0.02;
    } else if (distInFeet <= 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
    
}

function distanceInBlocks(startBlock, endBlock) {
    let result = startBlock - endBlock;

    return result >= 0 ? result : (result * -1);
}

function distanceInFeet(blocks) {
    return blocks * 264;
}