function driversWithRevenueOver(array, value) {
  return array.filter(function(obj) {
    if (obj.revenue > value) {
      return Object.assign({}, obj);
    }
  });
}

function driverNamesWithRevenueOver(array, value) {
  const newArray = [];
  array.filter(function(obj) {
    if (obj.revenue > value) {
      newArray.push(obj.name);
    }
  });
  return newArray;
}

function exactMatch(array, obj) {
  return array.filter(function(driver) {
    for (const key in obj) {
      return obj[key] === driver[key];
    }
  });
}

function exactMatchToList(array, obj) {
  return exactMatch(array, obj).map(function (driver) {
    return driver.name;
  });
}
