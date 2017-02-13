const five = require('johnny-five')
const board = new five.Board()

board.on('ready', function () {
  const matrix = new five.Led.Matrix({
    controller: 'HT16K33',
    dims: '8x16',
    rotation: 2
  })

  const heart = [
    '0110011001100110',
    '1001100110011001',
    '1000000110000001',
    '1000000110000001',
    '0100001001000010',
    '0010010000100100',
    '0001100000011000',
    '0000000000000000'
  ]

  matrix.draw(heart)
})
