controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`walkUp`,
    200,
    true
    )
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`heroWalkLeft`,
    200,
    true
    )
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`walkRIght`,
    200,
    true
    )
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`walkDown`,
    200,
    true
    )
})
let mySprite: Sprite = null
tiles.setCurrentTilemap(tilemap`level`)
mySprite = sprites.create(assets.image`idleLeft`, SpriteKind.Player)
forever(function () {
    scene.cameraFollowSprite(mySprite)
})
forever(function () {
    controller.moveSprite(mySprite)
})
forever(function () {
    if (!(controller.up.isPressed() || (controller.down.isPressed() || (controller.left.isPressed() || controller.right.isPressed())))) {
        animation.runImageAnimation(
        mySprite,
        assets.animation`idle`,
        200,
        false
        )
    }
})
