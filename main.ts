radio.setGroup(1)
basic.forever(function () {
    if (!(input.buttonIsPressed(Button.A)) && !(input.buttonIsPressed(Button.B))) {
        radio.sendNumber(0)
    } else if (input.buttonIsPressed(Button.A) && !(input.buttonIsPressed(Button.B))) {
        radio.sendNumber(1)
    } else if (!(input.buttonIsPressed(Button.A)) && input.buttonIsPressed(Button.B)) {
        radio.sendNumber(2)
    } else {
        radio.sendNumber(3)
    }
    if (input.pinIsPressed(TouchPin.P1)) {
        radio.sendValue("richtung", 1)
        basic.showNumber(1, 5)
    } else if (input.pinIsPressed(TouchPin.P2)) {
        radio.sendValue("richtung", 0)
        basic.showNumber(0, 5)
    } else if (input.isGesture(Gesture.Shake)) {
        radio.sendValue("hupen", 0)
        basic.showNumber(4, 5)
    } else {
    	
    }
})
