## Led Matrix Demo

[![Greenkeeper badge](https://badges.greenkeeper.io/jcblw/led-matrix-demo.svg)](https://greenkeeper.io/)

This is a simple demo of controlling an [16x8 1.2" LED Matrix](https://www.adafruit.com/product/2041) with an [Arduino Uno](https://www.arduino.cc/en/Main/ArduinoBoardUno) board.

![how to hook up](https://github.com/rwaldron/johnny-five/raw/master/docs/breadboard/led-matrix-HT16K33-16x8.png)

## Script usage

You will need [nodejs and npm](https://nodejs.org/). The demo was created using `nodejs v6.9.5`.

#### Installation

First [setup your board](https://github.com/rwaldron/johnny-five/wiki/Getting-Started#trouble-shooting)

```
git clone https://github.com/jcblw/led-matrix-demo.git
cd led-matrix-demo
```

To install the dependencies.

```
npm install
```

#### Running

```
npm start
```

This needs to run as sudo to make sure that the script as access to your usb ports.
