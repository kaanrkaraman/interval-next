
# Interval-next

**Interval-next** is a package that extends Javascript's built-in `setInterval()` capabilities. You have a plain and promisified interval method, which you can also use as a sleep code. It allows you to use human parseable time, such as `15 second` or `20 minute`, and also more complex times such as `1 day, 12 hour and 30 second`, which you can take a look at more detailed examples [down below](https://github.com/1000snowy/interval-next#complex-time-parsing). Functions returns the interval object itself, which you can use later to kill the interval with built-in `clearInterval()` method.


## Example usage
  

### IntervalNext .set(\<callbackFn>, \<human  readable  time>,\<immediate:  boolean>?)
```js

const  IntervalNext  =  require("interval-next")

const  Interval  =  IntervalNext.set(()  =>  {

// do something

}), "1 day, 12 hour and 30 minute")

```

  

### IntervalNext.setAsync(\<callbackFn>, \<human  readable  time>,\<immediate:  boolean>?)

```js

const  IntervalNext  =  require("interval-next")

const  Interval  =  IntervalNext.setAsync(()  =>  {

// do something

}), "20 minute and 30 second", true)

```

## Complex time parsing
Interval-next can understand and parse all of the following examples.

```js
const  Interval  =  IntervalNext.set(()  =>  {}), "20 minute and 30 second")
const  Interval  =  IntervalNext.set(()  =>  {}), "1 hour, 45 minute and 30 second")
const  Interval  =  IntervalNext.set(()  =>  {}), "1 month, 15 day, 12 hour and 30 minute")
const  Interval  =  IntervalNext.set(()  =>  {}), "1 year, 6 month, 15 day hour, 12 hour and 15 second")
```

  

### Accepted units

*  `second`

*  `minute`

*  `hour`

*  `day`

*  `month` (assumed 30 days)

*  `year` (assumed 365 days)

  

# Plans

  

*  Adding an override support for human readable time, allowing to use numbers

*  ~~Revamping readable time to make it more useful, by adding complex time parsing~~

*  Adding stopping and resuming to intervals

*  Adding `killInterval()` function, to enhance the capabilities of default `clearInterval()` method