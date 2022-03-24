input.onButtonPressed(Button.A, function () {
    Character.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.AB, function () {
    Character.change(LedSpriteProperty.Y, 1)
})
input.onButtonPressed(Button.B, function () {
    Character.change(LedSpriteProperty.X, 1)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    Character.change(LedSpriteProperty.Y, -1)
})
let sound1 = 0
let Room = 0
let Time_Passed = 0
let score_for_keys = 0
let boolean = false
let Character: game.LedSprite = null
let Start_Time = input.runningTime()
Character = game.createSprite(2, 2)
let Key_1 = game.createSprite(0, 0)
let Key2 = game.createSprite(0, 0)
let Key_3 = game.createSprite(0, 0)
let Pain = 0
let Keys = 0
let Key_3_last = 0
let Egg = 0
basic.forever(function () {
    boolean = true
    if (score_for_keys == 3) {
        Time_Passed = (input.runningTime() - Start_Time) / 1000
        music.playMelody("C - C - D E F G ", 120)
        music.playMelody("F - D E D C F G ", 120)
        basic.clearScreen()
        basic.showString("YOU WIN")
        basic.clearScreen()
        basic.showString("" + (Time_Passed))
        basic.clearScreen()
        basic.showString("Seconds")
        game.gameOver()
    }
    if (Room == 0) {
        led.setDisplayMode(DisplayMode.BlackAndWhite)
        led.plot(0, 0)
        led.plot(1, 0)
        led.plot(3, 0)
        led.plot(4, 0)
        led.plot(0, 1)
        led.plot(0, 2)
        led.plot(0, 3)
        led.plot(0, 4)
        led.plot(1, 4)
        led.plot(3, 4)
        led.plot(4, 4)
        led.plot(4, 3)
        led.plot(4, 2)
        led.plot(4, 1)
        Key_1.set(LedSpriteProperty.X, 0)
        Key_1.set(LedSpriteProperty.Y, 0)
        Key2.set(LedSpriteProperty.X, 0)
        Key2.set(LedSpriteProperty.Y, 0)
        Key_3.set(LedSpriteProperty.X, 0)
        Key_3.set(LedSpriteProperty.Y, 0)
        if (Egg == 1) {
            basic.clearScreen()
            basic.pause(500)
            Time_Passed = (input.runningTime() - Start_Time) / 1000
            basic.showString("TRUE WINNER")
            basic.clearScreen()
            basic.showString("" + (Time_Passed))
            basic.clearScreen()
            basic.showString("Seconds")
            game.setScore(100)
            game.gameOver()
        }
        if (Character.get(LedSpriteProperty.X) == 2) {
            if (Character.get(LedSpriteProperty.Y) == 4) {
                Room = 66
                Character.set(LedSpriteProperty.Y, 1)
            }
        }
        if (Character.get(LedSpriteProperty.X) == 0) {
            Character.set(LedSpriteProperty.X, 1)
        }
        if (Character.get(LedSpriteProperty.X) == 4) {
            Character.set(LedSpriteProperty.X, 3)
        }
        if (Character.get(LedSpriteProperty.Y) == 4) {
            if (Character.get(LedSpriteProperty.X) == 1) {
                Character.set(LedSpriteProperty.Y, 3)
            }
        }
        if (Character.get(LedSpriteProperty.Y) == 4) {
            if (Character.get(LedSpriteProperty.X) == 3) {
                Character.set(LedSpriteProperty.Y, 3)
            }
        }
        if (Character.get(LedSpriteProperty.Y) == 0) {
            if (Character.get(LedSpriteProperty.X) == 3) {
                Character.set(LedSpriteProperty.Y, 1)
            }
        }
        if (Character.get(LedSpriteProperty.Y) == 0) {
            if (Character.get(LedSpriteProperty.X) == 1) {
                Character.set(LedSpriteProperty.Y, 1)
            }
        }
        if (Character.get(LedSpriteProperty.Y) == 0) {
            if (Character.get(LedSpriteProperty.X) == 2) {
                Character.set(LedSpriteProperty.Y, 3)
                Room = 1
            }
        }
    }
    if (Room == 1) {
        led.setDisplayMode(DisplayMode.BlackAndWhite)
        led.plot(1, 0)
        led.plot(1, 1)
        led.plot(1, 2)
        led.plot(1, 3)
        led.plot(1, 4)
        led.plot(3, 0)
        led.plot(3, 1)
        led.plot(3, 2)
        led.plot(3, 3)
        led.plot(3, 4)
        Key_1.set(LedSpriteProperty.X, 1)
        Key_1.set(LedSpriteProperty.Y, 0)
        Key2.set(LedSpriteProperty.X, 1)
        Key2.set(LedSpriteProperty.Y, 0)
        Key_3.set(LedSpriteProperty.X, 1)
        Key_3.set(LedSpriteProperty.Y, 0)
        if (Character.get(LedSpriteProperty.X) == 1) {
            Character.set(LedSpriteProperty.X, 2)
        }
        if (Character.get(LedSpriteProperty.X) == 3) {
            Character.set(LedSpriteProperty.X, 2)
        }
        if (Character.get(LedSpriteProperty.Y) == 4) {
            Room = 0
            Character.set(LedSpriteProperty.Y, 1)
        }
        if (Character.get(LedSpriteProperty.Y) == 0) {
            Room = 2
            Character.set(LedSpriteProperty.Y, 3)
        }
    }
    if (Room == 2) {
        led.setDisplayMode(DisplayMode.BlackAndWhite)
        led.plot(1, 0)
        led.plot(1, 1)
        led.plot(0, 1)
        led.plot(3, 0)
        led.plot(3, 1)
        led.plot(4, 1)
        led.plot(0, 3)
        led.plot(1, 3)
        led.plot(1, 4)
        led.plot(3, 3)
        led.plot(3, 4)
        led.plot(4, 3)
        if (sound1 == 1) {
            music.playMelody("C5 C5 A B C5 A G E ", 120)
            music.playMelody("C C E D C E F A ", 120)
            sound1 = 0
        }
        Key_1.set(LedSpriteProperty.X, 1)
        Key_1.set(LedSpriteProperty.Y, 0)
        Key2.set(LedSpriteProperty.X, 1)
        Key2.set(LedSpriteProperty.Y, 0)
        if (Key_3.get(LedSpriteProperty.X) == Character.get(LedSpriteProperty.X)) {
            if (Key_3.get(LedSpriteProperty.Y) == Character.get(LedSpriteProperty.Y)) {
                Key_3.set(LedSpriteProperty.X, 1)
                Key_3.set(LedSpriteProperty.Y, 0)
                basic.pause(100)
                game.addScore(1)
                score_for_keys += 1
                sound1 = 1
            }
        }
        if (Key_3_last == 0) {
            Key_3.set(LedSpriteProperty.X, 3)
            Key_3.set(LedSpriteProperty.Y, 2)
            Key_3_last = 1
        }
        if (Character.get(LedSpriteProperty.X) == 0) {
            if (Character.get(LedSpriteProperty.Y) == 2) {
                Room = 3
                Character.set(LedSpriteProperty.X, 3)
            }
        }
        if (Character.get(LedSpriteProperty.X) == 2) {
            if (Character.get(LedSpriteProperty.Y) == 0) {
                Character.set(LedSpriteProperty.Y, 3)
                Character.set(LedSpriteProperty.X, 2)
                basic.pause(100)
                Room = 0
            }
        }
        if (score_for_keys == 2) {
            if (Character.get(LedSpriteProperty.X) == 0) {
                if (Character.get(LedSpriteProperty.Y) == 0) {
                    if (Egg == 0) {
                        Egg = 1
                    }
                }
            }
        } else {
            if (Character.get(LedSpriteProperty.X) == 1) {
                if (Character.get(LedSpriteProperty.Y) == 1) {
                    Character.set(LedSpriteProperty.X, 2)
                    Character.set(LedSpriteProperty.Y, 2)
                }
            }
        }
        if (Character.get(LedSpriteProperty.X) == 3) {
            if (Character.get(LedSpriteProperty.Y) == 1) {
                Character.set(LedSpriteProperty.X, 2)
                Character.set(LedSpriteProperty.Y, 2)
            }
        }
        if (Character.get(LedSpriteProperty.X) == 3) {
            if (Character.get(LedSpriteProperty.Y) == 3) {
                Character.set(LedSpriteProperty.X, 2)
                Character.set(LedSpriteProperty.Y, 2)
            }
        }
        if (Character.get(LedSpriteProperty.X) == 1) {
            if (Character.get(LedSpriteProperty.Y) == 3) {
                Character.set(LedSpriteProperty.X, 2)
                Character.set(LedSpriteProperty.Y, 2)
            }
        }
        if (Character.get(LedSpriteProperty.X) == 4) {
            Room = 3
            Character.set(LedSpriteProperty.X, 1)
        }
        if (Character.get(LedSpriteProperty.Y) == 4) {
            Room = 1
            Character.set(LedSpriteProperty.Y, 1)
        }
    }
    if (Room == 3) {
        led.setDisplayMode(DisplayMode.BlackAndWhite)
        led.plot(0, 1)
        led.plot(1, 1)
        led.plot(2, 1)
        led.plot(3, 1)
        led.plot(4, 1)
        led.plot(0, 3)
        led.plot(1, 3)
        led.plot(2, 3)
        led.plot(3, 3)
        led.plot(4, 3)
        Key_1.set(LedSpriteProperty.X, 0)
        Key_1.set(LedSpriteProperty.Y, 3)
        Key_3.set(LedSpriteProperty.X, 0)
        Key_3.set(LedSpriteProperty.Y, 3)
        if (Key2.get(LedSpriteProperty.X) == Character.get(LedSpriteProperty.X)) {
            if (Key2.get(LedSpriteProperty.Y) == Character.get(LedSpriteProperty.Y)) {
                Key2.set(LedSpriteProperty.X, 0)
                Key2.set(LedSpriteProperty.Y, 3)
                basic.pause(100)
                game.addScore(1)
                score_for_keys += 1
            }
        }
        if (Keys == 0) {
            Key2.set(LedSpriteProperty.X, 2)
            Key2.set(LedSpriteProperty.Y, 2)
            Keys = 1
        }
        if (Character.get(LedSpriteProperty.Y) == 1) {
            Character.set(LedSpriteProperty.Y, 2)
        }
        if (Character.get(LedSpriteProperty.Y) == 3) {
            Character.set(LedSpriteProperty.Y, 2)
        }
        if (Character.get(LedSpriteProperty.X) == 4) {
            if (Character.get(LedSpriteProperty.Y) == 2) {
                Room = 2
                Character.set(LedSpriteProperty.X, 1)
            }
        }
        if (Character.get(LedSpriteProperty.X) == 0) {
            if (Character.get(LedSpriteProperty.Y) == 2) {
                Room = 2
                Character.set(LedSpriteProperty.X, 3)
            }
        }
    }
    if (Room == 66) {
        led.setDisplayMode(DisplayMode.BlackAndWhite)
        led.plot(0, 0)
        led.plot(0, 1)
        led.plot(0, 2)
        led.plot(0, 3)
        led.plot(0, 4)
        led.plot(1, 0)
        led.plot(3, 0)
        led.plot(4, 0)
        led.plot(4, 1)
        led.plot(4, 2)
        led.plot(4, 3)
        led.plot(4, 4)
        Key_3.set(LedSpriteProperty.X, 0)
        Key_3.set(LedSpriteProperty.Y, 0)
        Key2.set(LedSpriteProperty.X, 0)
        Key2.set(LedSpriteProperty.Y, 0)
        if (Key_1.get(LedSpriteProperty.X) == Character.get(LedSpriteProperty.X)) {
            if (Key_1.get(LedSpriteProperty.Y) == Character.get(LedSpriteProperty.Y)) {
                Key_1.set(LedSpriteProperty.X, 0)
                Key_1.set(LedSpriteProperty.Y, 0)
                basic.pause(100)
                score_for_keys += 1
                game.addScore(1)
            }
        }
        if (Pain == 0) {
            Key_1.set(LedSpriteProperty.X, randint(1, 3))
            Key_1.set(LedSpriteProperty.Y, randint(1, 3))
            Pain = 1
        }
        if (Character.get(LedSpriteProperty.X) == 2) {
            if (Character.get(LedSpriteProperty.Y) == 0) {
                Room = 0
                Character.set(LedSpriteProperty.Y, 3)
            }
        }
        if (Character.get(LedSpriteProperty.X) == 0) {
            Character.set(LedSpriteProperty.X, 1)
        }
        if (Character.get(LedSpriteProperty.X) == 4) {
            Character.set(LedSpriteProperty.X, 3)
        }
        if (Character.get(LedSpriteProperty.Y) == 0) {
            if (Character.get(LedSpriteProperty.X) == 1) {
                Character.set(LedSpriteProperty.Y, 1)
            }
            if (Character.get(LedSpriteProperty.X) == 3) {
                Character.set(LedSpriteProperty.Y, 1)
            }
        }
        if (Character.get(LedSpriteProperty.Y) == 4) {
            Room = 3
            basic.pause(100)
            Character.set(LedSpriteProperty.Y, 0)
        }
    }
})
