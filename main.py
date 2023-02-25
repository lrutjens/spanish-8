class ActionKind(Enum):
    Walking = 0
    Idle = 1
    Jumping = 2

def on_button_multiplayer_right_pressed(player2):
    animation.run_image_animation(playerTwo,
        assets.animation("""
            elijahRight
        """),
        200,
        True)
mp.on_button_event(mp.MultiplayerButton.RIGHT,
    ControllerButtonEvent.PRESSED,
    on_button_multiplayer_right_pressed)

def on_button_multiplayer_up_pressed(player22):
    animation.run_image_animation(mySprite, assets.animation("""
        walkUp
    """), 200, True)
    animation.run_image_animation(playerTwo,
        assets.animation("""
            elijahRight
        """),
        200,
        True)
    print("up clicked")
mp.on_button_event(mp.MultiplayerButton.UP,
    ControllerButtonEvent.PRESSED,
    on_button_multiplayer_up_pressed)

def on_button_multiplayer_left_pressed(player23):
    animation.run_image_animation(mySprite,
        assets.animation("""
            heroWalkLeft
        """),
        200,
        True)
    animation.run_image_animation(playerTwo,
        assets.animation("""
            elijahLeft
        """),
        200,
        True)
    print("left clicked")
mp.on_button_event(mp.MultiplayerButton.LEFT,
    ControllerButtonEvent.PRESSED,
    on_button_multiplayer_left_pressed)

def on_right_pressed():
    animation.run_image_animation(mySprite, assets.animation("""
        walkRIght
    """), 200, True)
    print("right clicked")
controller.right.on_event(ControllerButtonEvent.PRESSED, on_right_pressed)

def OnInteraction():
    pass

def on_down_pressed():
    animation.run_image_animation(mySprite, assets.animation("""
        walkDown
    """), 200, True)
    print("downclicked")
controller.down.on_event(ControllerButtonEvent.PRESSED, on_down_pressed)

def on_button_multiplayer_down_pressed(player24):
    animation.run_image_animation(playerTwo,
        assets.animation("""
            elijahLeft
        """),
        200,
        True)
mp.on_button_event(mp.MultiplayerButton.DOWN,
    ControllerButtonEvent.PRESSED,
    on_button_multiplayer_down_pressed)

playerTwo: Sprite = None
mySprite: Sprite = None
tiles.set_current_tilemap(tilemap("""
    level
"""))
mySprite = sprites.create(assets.image("""
    sazdhfjgk
"""), SpriteKind.player)
playerTwo = sprites.create(assets.image("""
    sazdhfjgk
"""), SpriteKind.player)
mp.set_player_state(mp.player_selector(mp.PlayerNumber.ONE),
    MultiplayerState.score,
    0)
mp.set_player_state(mp.player_selector(mp.PlayerNumber.TWO),
    MultiplayerState.score,
    0)
number = game.ask_for_number("Player Number", 1)

def on_forever():
    if number == 0:
        scene.camera_follow_sprite(mySprite)
    if number == 1:
        scene.camera_follow_sprite(playerTwo)
    if mp.is_connected(mp.player_selector(mp.PlayerNumber.TWO)):
        mp.set_player_state(mp.player_selector(mp.PlayerNumber.ONE),
            MultiplayerState.score,
            0)
        mp.set_player_state(mp.player_selector(mp.PlayerNumber.TWO),
            MultiplayerState.score,
            1)
forever(on_forever)

def on_forever2():
    if not (controller.player1.is_pressed(ControllerButton.UP) or (controller.player1.is_pressed(ControllerButton.DOWN) or (controller.player1.is_pressed(ControllerButton.LEFT) or controller.player1.is_pressed(ControllerButton.RIGHT)))):
        animation.run_image_animation(mySprite, assets.animation("""
            idle
        """), 200, True)
forever(on_forever2)

def on_forever3():
    if not (controller.player2.is_pressed(ControllerButton.UP) or (controller.player2.is_pressed(ControllerButton.DOWN) or (controller.player2.is_pressed(ControllerButton.LEFT) or controller.player2.is_pressed(ControllerButton.RIGHT)))):
        animation.run_image_animation(playerTwo, assets.animation("""
            myAnim0
        """), 200, True)
forever(on_forever3)

def on_forever4():
    controller.player1.move_sprite(mySprite)
    controller.player2.move_sprite(playerTwo)
forever(on_forever4)
