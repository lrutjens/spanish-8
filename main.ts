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
    pause(10)
    wordNumber = randint(1, 141)
    game.showLongText(translationsspanish[wordNumber], DialogLayout.Bottom)
    buttonClickable.x += randint(-100, 100)
    buttonClickable.y += randint(-100, 100)
    if (game.askForString(translationsspanish[wordNumber], 24) == translationenglish[wordNumber]) {
        mp.changePlayerStateBy(mp.playerSelector(mp.PlayerNumber.One), MultiplayerState.score, 1)
        mp.changePlayerStateBy(mp.playerSelector(mp.PlayerNumber.Two), MultiplayerState.score, 1)
        game.showLongText("Correct!", DialogLayout.Bottom)
    } else {
        mp.changePlayerStateBy(mp.playerSelector(mp.PlayerNumber.One), MultiplayerState.score, -1)
        mp.changePlayerStateBy(mp.playerSelector(mp.PlayerNumber.Two), MultiplayerState.score, -1)
        game.showLongText("Wrong! " + translationenglish[wordNumber], DialogLayout.Bottom)
    }
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
    animation.runImageAnimation(
    buttonClickable,
    assets.animation`buttonDown`,
    100,
    true
    )
    OnInteraction()
    animation.runImageAnimation(
    buttonClickable,
    assets.animation`ButtonUp`,
    100,
    true
    )
})
mp.onButtonEvent(mp.MultiplayerButton.Down, ControllerButtonEvent.Pressed, function (player2) {
    animation.runImageAnimation(
    playerTwo,
    assets.animation`elijahLeft`,
    200,
    true
    )
})
let wordNumber = 0
let translationsspanish: string[] = []
let translationenglish: string[] = []
let buttonClickable: Sprite = null
let playerTwo: Sprite = null
let mySprite: Sprite = null
tiles.setCurrentTilemap(tilemap`level`)
mySprite = sprites.create(assets.image`sazdhfjgk`, SpriteKind.Player)
playerTwo = sprites.create(assets.image`sazdhfjgk`, SpriteKind.Player)
buttonClickable = sprites.create(assets.image`myImage`, SpriteKind.Button)
buttonClickable.setScale(0.75, ScaleAnchor.Middle)
translationenglish = [
"one",
"two",
"three",
"four",
"five",
"six",
"seven",
"eight",
"nine",
"ten",
"eleven",
"twelve",
"thirteen",
"fourteen",
"fifteen",
"sixteen",
"seventeen",
"eighteen",
"nineteen",
"twenty",
"twentyfive",
"twenty nine",
"thirty two",
"thirty four",
"forty six",
"forty seven",
"fifty one",
"fifty eight",
"sixty six",
"sixty two",
"seventy seven",
"seventy five",
"eighty one",
"eighty nine",
"ninety three",
"ninety four",
"one hundred",
"one hundred one",
"one hundred two",
"one hundred three",
"one hundred four",
"one hundred five",
"one hundred six",
"one hundred seven",
"one hundred eight",
"one hundred nine",
"one hundred ten",
"one hundred eleven",
"one hundred twelve",
"one hundred thirteen",
"one hundred fourteen",
"one hundred fifteen",
"one hundred sixteen",
"one hundred seventeen",
"one hundred eighteen",
"one hundred nineteen",
"one hundred twenty",
"one hundred twenty two",
"one hundred twenty four",
"one hundred thirty one",
"one hundred thirty four",
"one hundred forty",
"one hundred forty nine",
"one hundred fifty seven",
"one hundred fifty eight",
"one hundred sixty three",
"one hundred sixty five",
"one hundred eighty two",
"one hundred eighty seven",
"one hundred ninety six",
"one hundred ninety",
"monday",
"tuesday",
"wednesday",
"thursday",
"friday",
"saturday",
"sunday",
"january first",
"february first",
"march first",
"april first",
"may first",
"june first",
"july first",
"august first",
"september first",
"october first",
"november first",
"december first",
"january twenty fifth",
"february twentieth",
"march second",
"april fourteenth",
"may fifth",
"june thirtieth",
"july thirty first",
"august ninth",
"september tenth",
"october thirteenth",
"november nineteenth",
"december twenty fifth",
"spring",
"summer",
"autumn",
"winter",
"very hot",
"cold",
"cool",
"rainy",
"1:00",
"2:00",
"3:00",
"4:00",
"5:00",
"6:00",
"7:00",
"8:00",
"9:00",
"10:00",
"11:00",
"12:00",
"2:05",
"3:30",
"4:50",
"11:35",
"11:15",
"5:45",
"5:05",
"6:40",
"7:35",
"red",
"orange",
"yellow",
"green",
"blue",
"purple",
"pink",
"black",
"brown",
"white",
"gray"
]
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
"cincuenta y ocho",
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
"la primavera",
"el verano",
"el otono",
"el invierno",
"mucho calor",
"frio",
"fresco",
"llueve",
"es la una",
"son las dos",
"son las tres",
"son las cuatro",
"son las cinco",
"son las seis",
"son las siete",
"son las ocho",
"son las nueve",
"son las diez",
"son las once",
"son las doce",
"son las dos y cinco",
"son las tres y media",
"son las cinco menos diez",
"son las doce menos veinticinco",
"son las once y cuarto",
"son las seis menos cuarto",
"son las cinco y cinco",
"son las siete menos veinte",
"son las ocho menos veinticinco",
"roja",
"anaranjado",
"amarillo",
"verde",
"azul",
"morado",
"rosado",
"negro",
"cafe",
"blanco",
"gris"
]
mp.setPlayerState(mp.playerSelector(mp.PlayerNumber.One), MultiplayerState.score, 0)
mp.setPlayerState(mp.playerSelector(mp.PlayerNumber.One), MultiplayerState.score, 0)
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
    if (0 >= mySprite.x || 0 >= mySprite.y) {
        buttonClickable.x += randint(-100, 100)
        buttonClickable.y += randint(-100, 100)
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
