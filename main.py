timp_fulger = 0
timp_tunet = 0
basic.show_string("A:fulger")
basic.show_string("B:tunet")

def on_button_pressed_a():
    global timp_fulger
    timp_fulger = input.running_time()
    for i in range(3):
        basic.show_leds("""
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        """)
        basic.pause(50)
        basic.clear_screen()
        basic.pause(50)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global timp_tunet
    timp_tunet = input.running_time()
    for i in range (3):
        music.play_tone(Note.C, music.beat())
        basic.pause(50)
    timp = timp_tunet - timp_fulger
    distanta = 340*timp/1000
    basic.show_number(distanta)
input.on_button_pressed(Button.B, on_button_pressed_b)

