const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
};

const returnLaStTwoDrivers = function(drivers) {
    return drivers.slice[-2];
};

const selectingDrivers = [returnFirstTwoDRivers, returnLatTwoDrivers];

function createFareMultiplier(multiplier) {
    return function(fare) {
        return fare * multiplier;
    };
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(arrayOfDrivers, selectFunction) {
    return selectFunction(arrayOfDrivers);
}
