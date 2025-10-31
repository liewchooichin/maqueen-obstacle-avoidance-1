input.onButtonPressed(Button.A, function on_button_pressed_a() {
    maqueen.motorStop(maqueen.Motors.All)
})
let is_obstacle = 0
let distance = 0
let DEF_OBSTACLE = 20
let DEF_STOP = 5
//  distance - 2 to 400 cm, most accurate between 20 to 40 cm.
basic.forever(function on_forever() {
    
    distance = maqueen.Ultrasonic()
    if (distance > 0 && distance < DEF_OBSTACLE) {
        is_obstacle = randint(0, 4)
        if (is_obstacle == 0) {
            maqueen.servoRun(maqueen.Servos.S1, 90)
            //  left forward
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 50)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
            maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
            maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
            basic.pause(500)
        } else if (is_obstacle == 1) {
            maqueen.servoRun(maqueen.Servos.S1, 90)
            //  right forward
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 50)
            maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
            maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
            basic.pause(500)
        } else if (is_obstacle == 2) {
            maqueen.servoRun(maqueen.Servos.S2, 90)
            //  right forward
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 0)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 50)
            maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
            maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
            basic.pause(500)
        } else if (is_obstacle == 4) {
            maqueen.servoRun(maqueen.Servos.S2, 90)
            //  right forward
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 50)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 0)
            maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
            maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
            basic.pause(500)
        }
        
    } else if (distance <= DEF_STOP) {
        maqueen.motorStop(maqueen.Motors.All)
        basic.showIcon(IconNames.Sad)
    } else {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 50)
    }
    
})
