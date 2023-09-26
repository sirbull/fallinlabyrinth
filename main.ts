namespace SpriteKind {
    export const keys = SpriteKind.create()
    export const level = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.level, function (sprite, otherSprite) {
    if (gotKey == true) {
        door.setImage(img`
            ................................................
            ................................................
            ................................................
            ................................................
            ................................................
            44...........................................444
            ee44.......................................44eee
            ee4e44...................................44ee4ee
            c4eee444...............................44e4eee4c
            fcce4eee444...........................44eee4eccf
            .ffccce4eee444......................44ee4eeccff.
            ...fffccce4eee4....................4ee4eeccff...
            ......fffcce55e4..................4e55cccff.....
            .........ffccce4..................4eccfff.......
            ...........fffcf..................fcff..........
            ..............ff..................ff............
            `)
        tiles.setWallAt(tiles.getTileLocation(13, 30), false)
    } else {
        tiles.setWallAt(tiles.getTileLocation(13, 30), true)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.keys, function (sprite, otherSprite) {
    game.showLongText("You got the key!", DialogLayout.Bottom)
    sprites.destroy(GoldKey)
    Dudleif.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 4 4 4 4 4 4 4 . . . . 
        . . . 4 4 4 4 4 4 4 4 4 4 . . . 
        . . 4 4 4 7 7 7 7 7 4 7 4 . . . 
        . . . . 7 f f f f f f 7 . . . . 
        . . . . 7 1 8 7 7 8 1 7 . . . . 
        . . . . 7 7 7 7 7 7 7 7 . . . . 
        . . . . 7 7 7 1 1 7 7 7 . . . . 
        . . 5 5 5 7 7 f f 7 7 7 2 . . . 
        . . 5 2 5 5 5 5 5 7 7 2 2 2 . . 
        . . 7 2 5 2 5 2 5 2 2 2 2 7 . . 
        . . 5 5 5 2 2 2 2 2 2 2 2 2 . . 
        . . . f f . . . . . . f f . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    gotKey = true
    music.play(music.stringPlayable("C C5 - - - - - - ", 400), music.PlaybackMode.UntilDone)
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tileDarkGrass2, function (sprite, location) {
    game.gameOver(true)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairSouth, function (sprite, location) {
    if (gotKey == true) {
        door.setImage(img`
            44...........................................444
            ee44.......................................44eee
            ee4e44...................................44ee4ee
            c4eee444...............................44e4eee4c
            fcce4eee444...........................44eee4eccf
            .ffccce4eee444......................44ee4eeccff.
            ...fffccce4eee4....................4ee4eeccff...
            ......fffcce55e4..................4e55cccff.....
            .........ffccce4..................4eccfff.......
            ...........fffcf..................fcff..........
            ..............ff..................ff............
            ................................................
            ................................................
            ................................................
            ................................................
            ................................................
            `)
        tiles.setWallAt(tiles.getTileLocation(13, 30), false)
    } else {
        Dudleif.sayText("I need a key...", 1000, true)
        tiles.setWallAt(tiles.getTileLocation(13, 30), true)
    }
})
let gotKey = false
let door: Sprite = null
let GoldKey: Sprite = null
let Dudleif: Sprite = null
tiles.setCurrentTilemap(tilemap`level1`)
Dudleif = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 4 4 4 4 4 4 4 . . . . 
    . . . 4 4 4 4 4 4 4 4 4 4 . . . 
    . . 4 4 4 7 7 7 7 7 4 7 4 . . . 
    . . . . 7 f f f f f f 7 . . . . 
    . . . . 7 1 8 7 7 8 1 7 . . . . 
    . . . . 7 7 7 7 7 7 7 7 . . . . 
    . . . . 7 7 7 1 1 7 7 7 . . . . 
    . . . 2 7 7 7 f f 7 7 7 2 . . . 
    . . 2 2 2 7 7 7 7 7 7 2 2 2 . . 
    . . 7 2 2 2 2 2 2 2 2 2 2 7 . . 
    . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
    . . . f f . . . . . . f f . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
tiles.placeOnTile(Dudleif, tiles.getTileLocation(4, 2))
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
door = sprites.create(img`
    ................................................
    ................................................
    ...444444444444444444444f44444444444444444444...
    ..4ceee4ceee4ceee4ceeeeefeeeeec4eeec4eec4eeec4..
    .4ceee4ceee4ceee4cee455efe455eec4eeec4eec4eeec4.
    4ceee4ceee4ceee4ceeeeeeefeeeeeeec4eeec4eec4eeec4
    444444444444444444444444f44444444444444444444444
    eeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeee
    ccccccccccccccccccccceefffeecccccccccccccccccccc
    ffffffffffffffffffffffff.fffffffffffffffffffffff
    ................................................
    ................................................
    ................................................
    ................................................
    ................................................
    ................................................
    `, SpriteKind.level)
tiles.placeOnTile(door, tiles.getTileLocation(13, 30))
gotKey = false
