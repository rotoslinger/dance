controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    for (let index = 0; index < 80; index++) {
        mySprite.setImage(img`
. . . . f f f f . . . . . 
. . f f f f f f f f . . . 
. f f f f f f c f f f . . 
f f f f f f c c f f f c . 
f f f c f f f f f f f c . 
c c c f f f e e f f c c . 
f f f f f e e f f c c f . 
f f f b f e e f b f f f . 
. f 4 1 f 4 4 f 1 4 f . . 
. f e 4 4 4 4 4 4 e f . . 
. f f f e e e e f f f . . 
f e f b 7 7 7 7 b f e f . 
e 4 f 7 7 7 7 7 7 f 4 e . 
e e f 6 6 6 6 6 6 f e e . 
. . . f f f f f f . . . . 
. . . f f . . f f . . . . 
`)
        pause(1000)
        mySprite.setImage(img`
. . . . f f f f . . . . . 
. . f f f f f f f f . . . 
. f f f f f f c f f f . . 
f f f f f f c c f f f c . 
f f f c f f f f f f f c . 
c c c f f f e e f f c c . 
f f f f f e e f f c c f . 
f f f b f e e f b f f f . 
. f 4 1 f 4 4 f 1 4 f . . 
. f e 4 4 4 4 4 4 e f . . 
. f f f e e e e f f f . . 
. . f e f 7 7 f e f . . . 
. . f 4 e 7 7 e 4 f . . . 
. . f e e 6 6 e e f . . . 
. . . f f f f f f . . . . 
. . . f f . . f f . . . . 
`)
        pause(1000)
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    for (let index = 0; index < 80; index++) {
        mySprite.setImage(img`
. . . . f f f f . . . . . 
. . f f f f f f f f . . . 
. f f f f f f c f f f . . 
f f f f f f c c f f f c . 
f f f c f f f f f f f c . 
c c c f f f e e f f c c . 
f f f f f e e f f c c f . 
f f f b f e e f b f f f . 
. f 4 1 f 4 4 f 1 4 f . . 
. f e 4 4 4 4 4 4 e f . . 
. f f f e e e e f f f . . 
f e f b 7 7 7 7 b f e f . 
e 4 f 7 7 7 7 7 7 f 4 e . 
e e f 6 6 6 6 6 6 f e e . 
. . . f f f f f f . . . . 
. . . f f . . f f . . . . 
`)
        pause(1000)
        mySprite.setImage(img`
. . . . . . . f f f f . . . . . . . 
. . . . . f f f f f f f f . . . . . 
. . . . f f f f f f c f f f . . . . 
. . . f f f f f f c c f f f c . . . 
. . . f f f c f f f f f f f c . . . 
. . . c c c f f f e e f f c c . . . 
. . . f f f f f e e f f c c f . . . 
. . . f f f b f e e f b f f f . . . 
. . . . f 4 1 f 4 4 f 1 4 f e e e . 
. e e e f e 4 4 4 4 4 4 e f 4 4 e . 
. e 4 4 f f f e e e e f f f 4 4 4 . 
. 4 4 4 4 f b 7 7 7 7 b f 4 4 . . . 
. . . . . f 7 7 7 7 7 7 f . . . . . 
. . . f f f 6 6 6 6 6 6 f f f . . . 
. . . f f f f f f f f f f f f . . . 
. . . . . . . . . . . . . . . . . . 
`)
        pause(1000)
    }
})
function stop () {
    game.reset()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    stop()
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    for (let index = 0; index < 80; index++) {
        mySprite.setImage(img`
. . . . f f f f . . . . . 
. . f f f f f f f f . . . 
. f f f f f f c f f f . . 
f f f f f f c c f f f c . 
f f f c f f f f f f f c . 
c c c f f f e e f f c c . 
f f f f f e e f f c c f . 
f f f b f e e f b f f f . 
. f 4 1 f 4 4 f 1 4 f . . 
. f e 4 4 4 4 4 4 e f . . 
. f f f e e e e f f f . . 
f e f b 7 7 7 7 b f e f . 
e 4 f 7 7 7 7 7 7 f 4 e . 
e e f 6 6 6 6 6 6 f e e . 
. . . f f f f f f . . . . 
. . . f f . . f f . . . . 
`)
        pause(1000)
        mySprite.setImage(img`
. . . . f f f f . . . . . 
. . f f f f f f f f . . . 
. f f f f f f c f f f . . 
f f f f f f c c f f f c . 
f f f c f f f f f f f c . 
c c c f f f e e f f c c . 
f f f f f e e f f c c f . 
f f f b f e e f b f f f . 
. f 4 1 f 4 4 f 1 4 f . . 
. f e 4 4 4 4 4 4 e f . . 
. f f f e e e e f f f . . 
. . f e f 7 7 f e f . . . 
. . f 4 e 7 7 e 4 f . . . 
. . f e e 6 6 e e f . . . 
. . . f f f f f f . . . . 
. . . f f . . f f . . . . 
`)
        pause(1000)
    }
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    for (let index = 0; index < 80; index++) {
        mySprite.setImage(img`
. . . . f f f f . . . . . 
. . f f f f f f f f . . . 
. f f f f f f c f f f . . 
f f f f f f c c f f f c . 
f f f c f f f f f f f c . 
c c c f f f e e f f c c . 
f f f f f e e f f c c f . 
f f f b f e e f b f f f . 
. f 4 1 f 4 4 f 1 4 f . . 
. f e 4 4 4 4 4 4 e f . . 
. f f f e e e e f f f . . 
f e f b 7 7 7 7 b f e f . 
e 4 f 7 7 7 7 7 7 f 4 e . 
e e f 6 6 6 6 6 6 f e e . 
. . . f f f f f f . . . . 
. . . f f . . f f . . . . 
`)
        pause(1000)
        mySprite.setImage(img`
. . . . f f f f . . . . . . . . 
. . f f f f f f f f . . . . . . 
. f f f f f f c f f f . . . . . 
f f f f f f c c f f f c . . . . 
f f f c f f f f f f f c . . . . 
c c c f f f e e f f c c . . . . 
f f f f f e e f f c c f . . . . 
f f f b f e e f b f f f . . . . 
. f 4 1 f 4 4 f 1 4 f e e e . . 
. f e 4 4 4 4 4 4 e f e 4 e . . 
. f f f e e e e f f f 4 4 e . . 
f e f b 7 7 7 7 b f 4 4 . . . . 
e 4 f 7 7 7 7 7 7 f . . . . . . 
e e f 6 6 6 6 6 6 f . . . . . . 
. . . f f f f f f . . . . . . . 
. . . f f . . f f . . . . . . . 
`)
        pause(1000)
    }
})
let mySprite: Sprite = null
mySprite = sprites.create(img`
. . . . f f f f . . . . 
. . f f f f f f f f . . 
. f f f f f f c f f f . 
f f f f f f c c f f f c 
f f f c f f f f f f f c 
c c c f f f e e f f c c 
f f f f f e e f f c c f 
f f f b f e e f b f f f 
. f 4 1 f 4 4 f 1 4 f . 
. f e 4 4 4 4 4 4 e f . 
. f f f e e e e f f f . 
f e f b 7 7 7 7 b f e f 
e 4 f 7 7 7 7 7 7 f 4 e 
e e f 6 6 6 6 6 6 f e e 
. . . f f f f f f . . . 
. . . f f . . f f . . . 
`, SpriteKind.Player)
scene.setBackgroundColor(9)
forever(function () {
	
})
