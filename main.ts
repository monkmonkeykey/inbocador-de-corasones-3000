music.play(music.stringPlayable("D C D E E D C G ", 120), music.PlaybackMode.UntilDone)
led.setBrightness(36)
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
led.setBrightness(72)
basic.showLeds(`
    . . . . .
    . # . # .
    . # # # .
    . . # . .
    . . . . .
    `)
led.setBrightness(108)
basic.showLeds(`
    . . . . .
    . # . # .
    . # # # .
    . # # # .
    . . # . .
    `)
led.setBrightness(144)
basic.showLeds(`
    . # . # .
    . # # # .
    # # . # #
    . # . # .
    . . # . .
    `)
led.setBrightness(180)
basic.showLeds(`
    . # . # .
    # # # # #
    # # # # .
    . # . # .
    . . # . .
    `)
led.setBrightness(216)
basic.showLeds(`
    . # . # .
    # # # # #
    # # # # #
    . # # # .
    . . # . .
    `)
basic.forever(function () {
	
})
