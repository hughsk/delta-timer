# delta-timer #

A simple module for measuring time in animations. If you're writing a game
though, read [this](http://gafferongames.com/game-physics/fix-your-timestep/)
first and consider looking at [ticker](http://ghub.io/ticker) instead.

## Installation ##

``` bash
npm install delta-timer
```

## Usage ##

### timer = require('delta-time')([now]) ###

Create a new timer. Optionally, you can pass in a custom method for
generating that returns a timestamp - otherwise, this will default to
the best available of `performance.now`, `Date.now`, or `+new Date`.

### timer() ###

Returns the amount of time since `timer` was last called.

### timer.reset() ###

Resets the timer - the next return value will be 0.

### timer.pause() ###

Disables the timer. `timer()` will always return 0 during this time.

### timer.resume() ###

Resumes the timer - if previously paused, this will reset it too to avoid
skipping forward too far in time.

### timer.now() ###

Returns the current timestamp.

## Example ##

``` javascript
var timer = require('delta-timer')()
  , raf = require('raf')

var scene = require('./scene')

raf(window).on('data', function() {
  var dt = timer()
  scene.tick(dt)
})
```
