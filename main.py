def on_up_pressed():
    animation.run_image_animation(mySprite, assets.animation("""
        walkUp
    """), 200, True)
controller.up.on_event(ControllerButtonEvent.PRESSED, on_up_pressed)

def on_left_pressed():
    animation.run_image_animation(mySprite,
        assets.animation("""
            heroWalkLeft
        """),
        200,
        True)
controller.left.on_event(ControllerButtonEvent.PRESSED, on_left_pressed)

def on_right_pressed():
    animation.run_image_animation(mySprite, assets.animation("""
        walkRIght
    """), 200, True)
controller.right.on_event(ControllerButtonEvent.PRESSED, on_right_pressed)

def on_down_pressed():
    animation.run_image_animation(mySprite, assets.animation("""
        walkDown
    """), 200, True)
controller.down.on_event(ControllerButtonEvent.PRESSED, on_down_pressed)

mySprite: Sprite = None
tiles.set_current_tilemap(tilemap("""
    level
"""))

def on_forever():
    controller.move_sprite(mySprite)
forever(on_forever)

def on_forever2():
    if not (controller.up.is_pressed() or (controller.down.is_pressed() or (controller.left.is_pressed() or controller.right.is_pressed()))):
        animation.run_image_animation(mySprite, assets.animation("""
            idle
        """), 200, False)
forever(on_forever2)
