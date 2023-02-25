enum ActionKind {
    Walking,
    Idle,
    Jumping
}
enum RadioMessage {
    hello_world = 37285,
    message1 = 49434
}
namespace SpriteKind {
    export const Button = SpriteKind.create()
}
mp.onButtonEvent(mp.MultiplayerButton.Right, ControllerButtonEvent.Pressed, function (player2) {
    animation.runImageAnimation(
    playerTwo,
    assets.animation`elijahRight`,
    200,
    true
    )
})
mp.onButtonEvent(mp.MultiplayerButton.Up, ControllerButtonEvent.Pressed, function (player2) {
    animation.runImageAnimation(
    mySprite,
    assets.animation`walkUp`,
    200,
    true
    )
    animation.runImageAnimation(
    playerTwo,
    assets.animation`elijahRight`,
    200,
    true
    )
    console.log("up clicked")
})
mp.onButtonEvent(mp.MultiplayerButton.Left, ControllerButtonEvent.Pressed, function (player2) {
    animation.runImageAnimation(
    mySprite,
    assets.animation`heroWalkLeft`,
    200,
    true
    )
    animation.runImageAnimation(
    playerTwo,
    assets.animation`elijahLeft`,
    200,
    true
    )
    console.log("left clicked")
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`walkRIght`,
    200,
    true
    )
    console.log("right clicked")
})
function OnInteraction () {
    game.showLongText("ciento y tres", DialogLayout.Bottom)
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`walkDown`,
    200,
    true
    )
    console.log("downclicked")
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Button, function (sprite, otherSprite) {
    game.showLongText("ciento y tres", DialogLayout.Bottom)
    buttonClickable.x += randint(-100, 100)
    buttonClickable.y += randint(-100, 100)
    pause(2000)
    translationsspanish = [
    "uno",
    "dos",
    "tres",
    "cuatro",
    "cinco",
    "seis",
    "siete",
    "ocho",
    "nueve",
    "diez",
    "once",
    "doce",
    "trece",
    "catorce",
    "quince",
    "dieciseis",
    "diecisiete",
    "dieciocho",
    "diecinueve",
    "veite",
    "veinticinco",
    "veintinueve",
    "trienta y dos",
    "trienta y cuatro",
    "cuarenta y seis",
    "cuarenta y siete",
    "cincuenta y uno",
    "cincuenta y ovho",
    "sesenta y seis",
    "sesenta y dos",
    "setenta y siete",
    "setenta y cinco",
    "ochenta y uno",
    "ochenta y nueve",
    "noventa y tres",
    "noventa y cuatro",
    "cien",
    "ciento uno",
    "ciento dos",
    "ciento tres",
    "ciento cuatro",
    "ciento cinco",
    "ciento seis",
    "ciento siete",
    "ciento ocho",
    "ciento nueve",
    "ciento diez",
    "ciento once",
    "ciento doce",
    "ciento trece",
    "ciento catorce",
    "ciento quince",
    "ciento dieciseis",
    "ciento diecisiete",
    "ciento dieciocho",
    "ciento diecinueve",
    "ciento veinte",
    "ciento veintidos",
    "ciento veinticuatro",
    "ciento treinta y uno",
    "ciento treinta y cuatro",
    "ciento cuarenta",
    "ciento cuarenta y nueve",
    "ciento cincuenta y siete",
    "ciento cincuenta y ocho",
    "ciento sesenta y tres",
    "ciento sesenta y cinco",
    "ciento ochenta y dos",
    "ciento ochenta y siete",
    "ciento noventa y seis",
    "ciento noventa",
    "lunes",
    "martes",
    "miercoles",
    "jueves",
    "viernes",
    "sabado",
    "domingo",
    "primero de enero",
    "primero de febrero",
    "primero de marzo",
    "primero de abril",
    "primero de mayo",
    "primero de junio",
    "primero de julio",
    "primero de agosto",
    "primero de spetiembre",
    "primero de octubre",
    "primero de noviembre",
    "primero de deciembre",
    "veinticinco de enero",
    "veinte de febrero",
    "dos de marzo",
    "catorce de abril",
    "cinco de mayo",
    "el treinta de junio",
    "treinta y uno de julio",
    "nueve de agosto",
    "diez de septiembre",
    "trece de octubre",
    "diecinueve de noviembre",
    "veinticinco de diciembre",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    ""
    ]
})
mp.onButtonEvent(mp.MultiplayerButton.Down, ControllerButtonEvent.Pressed, function (player2) {
    animation.runImageAnimation(
    playerTwo,
    assets.animation`elijahLeft`,
    200,
    true
    )
})
let translationsspanish: string[] = []
let buttonClickable: Sprite = null
let playerTwo: Sprite = null
let mySprite: Sprite = null
tiles.setCurrentTilemap(tilemap`level`)
mySprite = sprites.create(assets.image`sazdhfjgk`, SpriteKind.Player)
playerTwo = sprites.create(assets.image`sazdhfjgk`, SpriteKind.Player)
buttonClickable = sprites.create(assets.image`myImage`, SpriteKind.Button)
buttonClickable.setScale(0.75, ScaleAnchor.Middle)
forever(function () {
    let number = 0
    if (number == 0) {
        scene.cameraFollowSprite(mySprite)
    }
    if (number == 1) {
        scene.cameraFollowSprite(playerTwo)
    }
    if (mp.isConnected(mp.playerSelector(mp.PlayerNumber.Two))) {
        mp.setPlayerState(mp.playerSelector(mp.PlayerNumber.One), MultiplayerState.score, 0)
        mp.setPlayerState(mp.playerSelector(mp.PlayerNumber.Two), MultiplayerState.score, 1)
    }
})
forever(function () {
    if (!(controller.player1.isPressed(ControllerButton.Up) || (controller.player1.isPressed(ControllerButton.Down) || (controller.player1.isPressed(ControllerButton.Left) || controller.player1.isPressed(ControllerButton.Right))))) {
        animation.runImageAnimation(
        mySprite,
        assets.animation`idle`,
        200,
        true
        )
    }
})
forever(function () {
    if (!(controller.player2.isPressed(ControllerButton.Up) || (controller.player2.isPressed(ControllerButton.Down) || (controller.player2.isPressed(ControllerButton.Left) || controller.player2.isPressed(ControllerButton.Right))))) {
        animation.runImageAnimation(
        playerTwo,
        assets.animation`myAnim0`,
        200,
        true
        )
    }
})
forever(function () {
    controller.player1.moveSprite(mySprite)
    controller.player2.moveSprite(playerTwo)
})
