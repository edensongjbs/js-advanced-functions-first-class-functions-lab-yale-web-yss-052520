// Code your solution in this file!

const returnFirstTwoDrivers = function(ar) {
    return ar.slice(0, 2)
}

const returnLastTwoDrivers = function(ar) {
    return ar.slice(ar.length-2, ar.length)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(mult) {
    return function(fare) { return fare*mult }
}

function fareDoubler(fare) {
    return createFareMultiplier(2)(fare)
}

const fareTripler =  function(fare) {
    return createFareMultiplier(3)(fare)
}

function selectDifferentDrivers(ar, fn) {
    return fn(ar)
}