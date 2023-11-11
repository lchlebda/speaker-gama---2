input.onPinPressed(TouchPin.P0, function () {
    radio.sendNumber(0)
})
input.onPinPressed(TouchPin.P2, function () {
    radio.sendNumber(2)
})
input.onPinPressed(TouchPin.P1, function () {
    radio.sendNumber(1)
})
radio.setGroup(1)
