import { Scene } from 'phaser';

export class Game extends Scene
{
    camera: Phaser.Cameras.Scene2D.Camera;
    background: Phaser.GameObjects.Image;

    /*
        Cards

        step1 starting small.

        add sprite get it to drag with a little shake animation

    */
    heartAce: Phaser.GameObjects.Sprite;




    constructor ()
    {
        super('Game');
    }

    create ()
    {
        this.camera = this.cameras.main;
        this.camera.setBackgroundColor(0x00ff00);

        this.background = this.add.image(512, 384, 'background');
        this.background.setAlpha(0.5); 


        this.heartAce = this.add.sprite('0', '0', 'hearts-aces');
        this.heartAce.setInteractive({ draggable: true }); 
        this.heartAce.on('drag', function(e){
            console.log(e); 
        })


    }
}
