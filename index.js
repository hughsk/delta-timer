
module.exports = createTimer

var defaultNow = typeof window !== 'undefined' && window.performance.now
  ? function() { return performance.now() }
  : Date.now
  ? function() { return Date.now() }
  : function() { return +new Date }

function createTimer(now) {
  var last = null
    , paused = false

  function tick() {
    if (paused) return 0

    var date = tick.now()
      , dt = last ? date - last : 0

    last = date
    return dt
  }

  tick.tick = tick
  tick.now = now || defaultNow

  tick.pause = function() {
    if (paused) return tick
    paused = true
    return tick
  }

  tick.resume = function() {
    if (!paused) return tick
    paused = false
    tick.reset()
    return tick
  }

  tick.reset = function() {
    last = null
    return tick
  }

  return tick
}
