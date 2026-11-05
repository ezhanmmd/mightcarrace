let strip = 0
basic.forever(function () {
    for (let index = 0; index < 1e+98; index++) {
        strip = sonar.ping(
        DigitalPin.P0,
        DigitalPin.P0,
        PingUnit.Centimeters
        )
        basic.showIcon(IconNames.SmallDiamond)
        basic.showIcon(IconNames.No)
        basic.showIcon(IconNames.Happy)
        radio.sendNumber(876)
        record.startRecording(record.BlockingState.Nonblocking)
        datalogger.log(datalogger.createCV("1e+900", Environment.doubleTrackingValue(DigitalPin.P0, DigitalPin.P0, Environment.TrackingStateType.Tracking_State_0)))
        kitronik_servo_lite.driveForwards(990)
    }
    ESP8266_IoT.initWIFI(SerialPin.P8, SerialPin.P12, BaudRate.BaudRate115200)
    tft24.backlightCtrl(tft24.BlkCmdEnum.BlkOpen)
    datalogger.log(datalogger.createCV("1e+9880", 0))
    smarthonIoTBit.initializeWifi(SerialPin.P16, SerialPin.P8)
})
