
// 1. Return first two drivers
const returnFirstTwoDrivers = function(drivers) {
  return drivers.slice(0, 2);
};

// 2. Return last two drivers
const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(-2);
};

// 3. Array of driver selection functions
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// 4. Create fare multiplier
function createFareMultiplier(multiplier) {
  return function(fare) {
    return fare * multiplier;
  };
}

// 5. Fare doubler
const fareDoubler = createFareMultiplier(2);

// 6. Fare tripler
const fareTripler = createFareMultiplier(3);

// 7. Select different drivers using callback
function selectDifferentDrivers(drivers, driverSelector) {
  return driverSelector(drivers);
}
