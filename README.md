# Interval-next
Interval-next introduces two additional functions similar to `setInterval()`, as of version alpha 1 (`1.0.0-rc1`) and adds an immediate executing as optional. Built in interval methods doesn't execute on first run, instead they wait for the period that you chose to make it's first iteration. 

**Interval-next** also allows you to use human parseable time, such as `15 second`, or `20 minute`. You have a promisified version of interval, also can be used as a sleep code. Also, functions returns the interval itself, which you can use to kill the interval with built-in `clearInterval()` method

## Quick start


### IntervalNext .set(\<callbackFn>, \<human readable time>,\<immediate: boolean>?)
```js
const IntervalNext = require("interval-next")
const Interval = IntervalNext.set(<callbackFn>, <humanReadable>)
```

### IntervalNext.setAsync(\<callbackFn>, \<human readable time>,\<immediate: boolean>?)
```js
const IntervalNext = require("interval-next")
const Interval.setAsync(<callbackFn>, <humanReadable>)
```

### Accepted units
* `second`
* `minute`
* `hour`
* `day`
* `month` (assumed 30 days)
* `year` (assumed 365 days)

# Plans

* Adding an override support for human readable time, allowing to use numbers.
* Revamping readable time to make it more useful, by adding complex time parsing
* Adding stopping and resuming to intervals
* Adding `killInterval()` function, to enhance the capabilities of default `clearInterval()` method
