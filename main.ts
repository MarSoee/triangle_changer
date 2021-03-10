led.plot(2,1)
led.plot(1,3)
led.plot(3,3)

input.onButtonPressed(Button.A, function () {
    led.unplot(1,1)
    led.unplot(3,1)
    led.unplot(2,3)
    led.plot(2,1)
    led.plot(1,3)
    led.plot(3,3)
})

input.onButtonPressed(Button.B, function () {
    led.unplot(2,1)
    led.unplot(1,3)
    led.unplot(3,3)
    led.plot(1,1)
    led.plot(3,1)
    led.plot(2,3)

})

