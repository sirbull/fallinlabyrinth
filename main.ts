namespace SpriteKind {
    export const keys = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.keys, function (sprite, otherSprite) {
    sprites.destroy(GoldKey)
    game.showLongText("You got the key!", DialogLayout.Bottom)
    music.play(music.stringPlayable("C C5 - - - - - - ", 400), music.PlaybackMode.UntilDone)
    Dudleif = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 4 4 4 4 4 4 4 . . . . 
        . . . 4 4 4 4 4 4 4 4 4 4 . . . 
        . . 4 4 4 5 5 5 5 5 4 5 4 . . . 
        . . . . 5 f f f f f f 5 . . . . 
        . . . . 5 1 8 5 5 8 1 5 . . . . 
        . . . . 5 5 5 5 5 5 5 5 . . . . 
        . . . . 5 5 5 1 1 5 5 5 . . . . 
        . . b b b 5 5 f f 5 5 5 2 . . . 
        . . b 2 b b b b b 5 5 2 2 2 . . 
        . . 5 2 b 2 b 2 b 2 2 2 2 5 . . 
        . . b b b 2 2 2 2 2 2 2 2 2 . . 
        . . . f f . . . . . . f f . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
})
let GoldKey: Sprite = null
let Dudleif: Sprite = null
tiles.setCurrentTilemap(tilemap`level1`)
Dudleif = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 4 4 4 4 4 4 4 . . . . 
    . . . 4 4 4 4 4 4 4 4 4 4 . . . 
    . . 4 4 4 5 5 5 5 5 4 5 4 . . . 
    . . . . 5 f f f f f f 5 . . . . 
    . . . . 5 1 8 5 5 8 1 5 . . . . 
    . . . . 5 5 5 5 5 5 5 5 . . . . 
    . . . . 5 5 5 1 1 5 5 5 . . . . 
    . . . 2 5 5 5 f f 5 5 5 2 . . . 
    . . 2 2 2 5 5 5 5 5 5 2 2 2 . . 
    . . 5 2 2 2 2 2 2 2 2 2 2 5 . . 
    . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
    . . . f f . . . . . . f f . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
tiles.placeOnTile(Dudleif, tiles.getTileLocation(3, 2))
controller.moveSprite(Dudleif)
scene.cameraFollowSprite(Dudleif)
GoldKey = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . d d d d . . . . . . . . . 
    . . d 5 5 5 5 d . . . . . . . . 
    . . d 5 4 4 5 d d d d d d d . . 
    . . d 5 d d 5 5 5 5 5 5 5 d . . 
    . . d 5 d d 5 4 4 4 5 4 5 d . . 
    . . d 5 5 5 5 d d d 5 d 5 d . . 
    . . d 4 4 4 4 d . d 4 d 4 d . . 
    . . . d d d d . . . d d d d . . 
    . . . . . . . . . . . . d . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.keys)
tiles.placeOnTile(GoldKey, tiles.getTileLocation(7, 13))
