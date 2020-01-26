// Code your solution in this file!
function distanceFromHqInBlocks(start) {
    if (start > 42) {
        return start - 42;
    } else { 
        return (42 - start); 
    }
}

function distanceFromHqInFeet(blocks) {
    return distanceFromHqInBlocks(blocks) * 264;
}

function distanceTravelledInFeet(startBlock, endBlock) {
    let blocksTravelled;
    if (startBlock > endBlock){
        blocksTravelled = startBlock - endBlock;
    }
    else {
        blocksTravelled = endBlock - startBlock;
    }
    return blocksTravelled * 264;
}

function calculatesFarePrice(start, finish) {
   let distance = distanceTravelledInFeet(start, finish);
   let fareDistance;
   if (distance < 400) {
       return 0;
   }
   else if (distance >=400 && distance <= 2000) {
       fareDistance = distance - 400;
       return (fareDistance * 0.02);
   }
   else if (distance > 2000 && distance < 2500) {
       return 25;
   }
   else {
       return 'cannot travel that far'
   }
}