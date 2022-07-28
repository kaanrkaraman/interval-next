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
    if (typeof immediate !== "boolean") throw new Error("IntervalError: Immediate must be a boolean.");
    const match = time.match(/(second|minute|hour|day|month|year)/s);

    _.push(time.slice(0, match.index), time.slice(match.index));
    const amount = _[0], unit = units[_[1]], schedule = unit * amount;
    
    if (immediate) callback();
    return setInterval(callback, schedule);
}

const setAsync = (callback, time, immediate = false, _ = new Array()) => {
    if (!callback || typeof callback !== "function") throw new Error("IntervalError: Callback must be a function.");
    if (typeof immediate !== "boolean") throw new Error("IntervalError: Immediate must be a boolean.");
    const match = time.match(/(second|minute|hour|day|month|year)/s);

    _.push(time.slice(0, match.index), time.slice(match.index));
    const amount = _[0], unit = units[_[1]], schedule = unit * amount;
    let intId; 

    new Promise((undefined, reject) => {
        try {
            if(immediate) callback();
            intId = setInterval(callback, schedule);
        } catch (err) {
            reject(err);
        }
    });

    return intId;
}

module.exports = {set, setAsync};