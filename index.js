function findMatching(drivers, attribute) {
    return drivers.filter(function(driver){
        return driver.toLowerCase() === attribute.toLowerCase()
    })
}

function fuzzyMatch(drivers, attribute) {
    return drivers.filter(function(driver){
        return driver.toLowerCase().substring(0, attribute.length) === attribute.toLowerCase()
    })
}

function matchName(genericDrivers, driverNames) {
    return genericDrivers.filter(function(driver) {
        return driver.name === driverNames
    })
}