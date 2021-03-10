def on_button_pressed_a():
    led.plot(0, 1)
    led.plot(1, 0)
    led.plot(2, 1)
    led.plot(3, 0)
    led.plot(4, 1)
    led.plot(4, 2)
    led.plot(3, 3)
    led.plot(2, 4)
    led.plot(1, 3)
    led.plot(0, 2)
input.on_button_pressed(Button.A, on_button_pressed_a)

led