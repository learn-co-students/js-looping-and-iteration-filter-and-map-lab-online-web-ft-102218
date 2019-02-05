// Code your solution here:
function driversWithRevenueOver(drivers, target) {
  return drivers.filter(function(driver) {
    return driver.revenue > target;
  });
}

function driverNamesWithRevenueOver(drivers, target) {
  return driversWithRevenueOver(drivers, target)
    .map(function(driver) {
      return driver.name;
    });
}

function exactMatch(drivers, target) {
  return drivers.filter(function(driver) {
    for (const key in target) {
      match = driver[key] === target[key];
    }

    return match;
  });
}

function exactMatchToList(drivers, target) {
  return exactMatch(drivers, target)
    .map(function(driver) {
      return driver.name;
    });
}