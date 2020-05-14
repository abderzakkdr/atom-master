class OptionMenu extends Phaser.Scene {
    constructor() {
        super({ key:'OptionMenu'});
    }

    preload(){
        this.load.image('fondOM','../img/fond_vide.png');
        this.load.css('style','../css/styleOM.css');
    }

    create() {
        this.background();
        this.menu();
    }

    background(){
        let image=this.add.image(this.cameras.main.width / 2, this.cameras.main.height / 2,'fondOM');
        let scaleX = this.cameras.main.width / image.width;
        let scaleY = this.cameras.main.height / image.height;
        let scale = Math.max(scaleX, scaleY);
        image.setScale(scale).setScrollFactor(0);
    }

    menu(){
        let h1=this.add.dom(larg/2,0,'h1',null,'Option');
        let son=this.add.dom(larg/2,2*haut/3,'son',null,'Son');
        let retour=this.add.dom(larg/2,2*haut/3,'retour',null,'Retour');
        h1.setClassName('title1OM');
        son.setClassName('menu1OM');
        retour.setClassName('menu3OM');
        son.addListener('click');
        son.on('click', function (event) {
            if(gameState.music.isPlaying){
                gameState.music.pause();
            }
            else{
                gameState.music.resume();
            }
        });

        retour.addListener('click');
        retour.on('click', function (event) {
            game.scene.stop('OptionMenu');
			game.scene.start('MainMenu');
        });
    }
}