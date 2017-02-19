const five = require('johnny-five')
const letters = require('./src/letters')
const createNArray = require('./src/create-n-array')
const board = new five.Board()
const WIDTH = 16
const HEIGHT = 8

board.on('ready', function () {
  const matrix = new five.Led.Matrix({
    controller: 'HT16K33',
    dims: `${HEIGHT}x${WIDTH}`,
    rotation: 2
  })

  const phrase = 'jsla'

  const data = createNArray(HEIGHT).map((n, i) => {
    return phrase
      .split('')
      .map(l => letters[l][i])
      .join('')
  })

  let curr = 0
  let max = phrase.length * HEIGHT

  function draw () {
    if (curr === max) return
    const substr = data.map((line) => {
      return line.substr(curr, WIDTH)
    })
    matrix.draw(substr)
    curr += 1
    setTimeout(draw, 500)
  }

  draw()
})
