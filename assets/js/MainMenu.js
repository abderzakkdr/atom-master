let larg = (window.innerWidth);
let haut = (window.innerHeight);

class MainMenu extends Phaser.Scene {
    constructor() {
        super({ key:'MainMenu'});
    }


    preload(){
        this.load.image('fond','../img/fond.png');
        this.load.css('style','../css/styleMM.css');
        this.load.audio('Gangsta', ["../audio/Gangsta's paradise.mp3"]);
    }

    create() {
        if(gameState.firstTime){
            this.music();
        }
        this.background();
        this.menu();
    }

    music(){
        gameState.firstTime=false;
        let test = this.sound.add('Gangsta');
        test.play({loop:true, seek: 4})
        gameState.music=test;
    }
    
    background(){
        let image=this.add.image(larg / 2, haut/2,'fond');
        let scaleX = larg / image.width;
        let scaleY = haut / image.height;
        let scale = Math.max(scaleX, scaleY);
        image.setScale(scale).setScrollFactor(0);
    }

    menu(){
        let jouer=this.add.dom(larg/2-10,3*haut/4,'jouer',null,'Jouer');
        let atomes=this.add.dom(larg/2-10,3*haut/4,'atomes',null,'Niveaux');
        let option = this.add.dom(larg/2-10,3*haut/4, 'opt',null,'Option');
        let quitter=this.add.dom(larg/2-10,3*haut/4,'quitter',null,'Quitter');
        jouer.setClassName('menu1');
        atomes.setClassName('menu2');
        option.setClassName('menu3');
        quitter.setClassName('menu4');
        
        jouer.addListener('click');
        jouer.on('click', function (event) {
            game.scene.stop('MainMenu');
            game.scene.start('choixperso');
            gameState.level=gameState.max;
        });

        atomes.addListener('click');
        atomes.on('click', function (event) {
            game.scene.stop('MainMenu');
            game.scene.start('Accueil');
        });

        option.addListener('click');
        option.on('click', function (event) {
            game.scene.stop('MainMenu');
            game.scene.start('OptionMenu');
        });

        quitter.addListener('click');
        quitter.on('click', function (event) {
            gameState.music.stop();
            game.scene.stop('MainMenu');
            alert('Vous allez quitter le jeu');
            window.close();
        });
    }
}