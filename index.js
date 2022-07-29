const numbered = require("numbered");

const units = {};
units.second = 1000;
units.minute = 60 * units.second;
units.hour = 60 * units.minute;
units.day = 24 * units.hour;
units.week = 7 * units.day;
units.month = 30 * units.day;
units.year = 365 * units.day;

const set = (callback, time, immediate = false, _ = new Array()) => {
    if (!callback || typeof callback !== "function") return console.error("IntervalError: Callback must be a function.");
    if (!time || typeof time !== "string") throw new Error("IntervalError: Time must be a string.");
    if (typeof immediate !== "boolean") throw new Error("IntervalError: Immediate must be a boolean.");
    time = time.trim().replace(/(\sand\s|\s+|,\s+)/gs, " ");
    const match = time.match(/(second|minute|hour|day|month|year)/gs);
    const arrayifiedTime = time.split(" ");

    time = 0;
    match.forEach((undefined, index) => {
        const amount = arrayifiedTime[index * 2], timeUnit = arrayifiedTime[index * 2 + 1]
        time += units[timeUnit] * amount;
    });
    
    if (immediate) callback();
    return setInterval(callback, time);
}

const setAsync = (callback, time, immediate = false, _ = new Array()) => {
    if (!callback || typeof callback !== "function") throw new Error("IntervalError: Callback must be a function.");
    if (!time || typeof time !== "string") throw new Error("IntervalError: Time must be a string.");
    if (typeof immediate !== "boolean") throw new Error("IntervalError: Immediate must be a boolean.");
    time = time.trim().replace(/(\sand\s|\s+|,\s+)/gs, " ");
    const match = time.match(/(second|minute|hour|day|month|year)/gs);
    const arrayifiedTime = time.split(" ");
    
    time = 0;
    match.forEach((undefined, index) => {
        const amount = arrayifiedTime[index * 2], timeUnit = arrayifiedTime[index * 2 + 1]
        time += units[timeUnit] * amount;
    });

    let intId;

    new Promise((undefined, reject) => {
        try {
            if(immediate) callback();
            intId = setInterval(callback, time);
        } catch (err) {
            reject(err);
        }
    });

    return intId;
}

module.exports = {set, setAsync};