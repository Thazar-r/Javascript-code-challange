function speedDetector(speed) {
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;
    const maxDemeritPoints = 12;

    if (speed <= speedLimit) {
        console.log("Ok");
    } else {
        let demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
        console.log(`Points: ${demeritPoints}`);

        if (demeritPoints > maxDemeritPoints) {
            console.log("License suspended");
        }
    }
}

speedDetector(80);

