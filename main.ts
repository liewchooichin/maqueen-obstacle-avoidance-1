input.onButtonPressed(Button.A, function () {
    maqueen.motorStop(maqueen.Motors.All)
})
let is_obstacle = false
let distance = 0
let DEF_OBSTACLE = 10
basic.forever(function () {
    distance = maqueen.Ultrasonic()
    if (distance < DEF_OBSTACLE && distance != 0) {
        is_obstacle = Math.randomBoolean()
        if (is_obstacle == true) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 50)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
            maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
            maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
            basic.pause(500)
        } else {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 50)
            maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
            maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
            basic.pause(500)
        }
    } else {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 50)
    }
})
