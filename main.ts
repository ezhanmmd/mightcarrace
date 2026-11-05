let strip = 0
let turn = 0

// Button A turns left. Button B turns right.
// The drive loop performs the turn so driveForwards cannot cancel it.
input.onButtonPressed(Button.A, function () {
    turn = -1
    basic.showArrow(ArrowNames.West)
})
input.onButtonPressed(Button.B, function () {
    turn = 1
    basic.showArrow(ArrowNames.East)
})

// Group is set before the car starts driving and talking on the radio.
radio.setGroup(1)
basic.forever(function () {
    if (turn < 0) {
        kitronik_servo_lite.turnLeft(45)
        turn = 0
    } else if (turn > 0) {
        kitronik_servo_lite.turnRight(45)
        turn = 0
    } else {
        kitronik_servo_lite.driveForwards(10)
        basic.pause(100)
    }
    strip = sonar.ping(
        DigitalPin.P0,
        DigitalPin.P0,
        PingUnit.Centimeters
    )
    radio.sendNumber(strip)
    datalogger.log(
        datalogger.createCV("cm", strip),
        datalogger.createCV("line", Environment.doubleTrackingValue(DigitalPin.P0, DigitalPin.P0, Environment.TrackingStateType.Tracking_State_0))
    )
})

// Gadgets that should run once. The old program hid these behind a 1e+98 loop.
radio.sendNumber(876)
record.startRecording(record.BlockingState.Nonblocking)
smarthonIoTBit.initializeWifi(SerialPin.P16, SerialPin.P8)
basic.showIcon(IconNames.SmallDiamond)
basic.showIcon(IconNames.No)
basic.showIcon(IconNames.Happy)
