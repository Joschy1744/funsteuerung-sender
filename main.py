radio.set_group(1)

def on_forever():
    if not (input.button_is_pressed(Button.A)) and not (input.button_is_pressed(Button.B)):
        radio.send_number(0)
        basic.show_number(0, 5)
    elif input.button_is_pressed(Button.A) and not (input.button_is_pressed(Button.B)):
        radio.send_number(1)
        basic.show_number(1, 5)
    elif not (input.button_is_pressed(Button.A)) and input.button_is_pressed(Button.B):
        radio.send_number(2)
        basic.show_number(2, 5)
    else:
        radio.send_number(3)
        basic.show_number(3, 5)
    if input.is_gesture(Gesture.SCREEN_UP):
        radio.send_value("richtung", 1)
    else:
        radio.send_value("richtung", 0)
basic.forever(on_forever)
