let timp_fulger = 0
let timp_tunet = 0
basic.showString("A:fulger")
basic.showString("B:tunet")
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    timp_fulger = input.runningTime()
    for (let i = 0; i < 3; i++) {
        basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
        basic.pause(50)
        basic.clearScreen()
        basic.pause(50)
    }
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    
    timp_tunet = input.runningTime()
    for (let i = 0; i < 3; i++) {
        music.playTone(Note.C, music.beat())
        basic.pause(50)
    }
    let timp = timp_tunet - timp_fulger
    let distanta = 340 * timp / 1000
    basic.showNumber(distanta)
})
