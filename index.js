// Your code here
function createEmployeeRecord([first, last, job, pay]){
    const newEmployee = {
        firstName: first, 
        familyName: last, 
        title: job, 
        payPerHour: pay, 
        timeInEvents: [], 
        timeOutEvents: [] 
    }
    return newEmployee
}

function createEmployeeRecords(arryOne){
    return arryOne.map(x => createEmployeeRecord(x))
}

function createTimeInEvent(object, timeStamp){
    let splitTimeStamp = timeStamp.split(' ')
    let hour = splitTimeStamp[1]
    let date = splitTimeStamp[0]
    object.timeInEvents.push({
        type: 'TimeIn',
        hour: parseInt(hour, 10),
        date: date
    })
    return object
}

function createTimeOutEvent(object, timeStamp){
    let splitTimeStamp = timeStamp.split(' ')
    let hour = splitTimeStamp[1]
    let date = splitTimeStamp[0]
    object.timeOutEvents.push({
        type: 'TimeOut',
        hour: parseInt(hour, 10),
        date: date
    })
    return object
}

function hoursWorkedOnDate(object, date) {
    const timeInArry = object.timeInEvents
    const timeOutArry = object.timeOutEvents
    const findClockInDate = timeInArry.find(element => element.date === date)
    const findClockOutDate = timeOutArry.find(element => element.date === date)
    const clockInHour = Object.keys(findClockInDate)[1]
    const clockOutHour = Object.keys(findClockOutDate)[1]
    if (clockInHour > clockOutHour){
        return clockInHour - clockOutHour
    } else if (clockOutHour > clockInHour) {
        return clockOutHour - clockInHour
    }

    console.log(Object.keys(findClockInDate)[1])
    console.log(Object.keys(findClockOutDate)[1])
    return object
}