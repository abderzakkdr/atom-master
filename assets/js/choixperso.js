class ChoixPerso extends Phaser.Scene {
	constructor() {
		super({ key: 'choixperso' })
	}

    preload(){
        this.load.image('fondCP','../img/fond_vide.png');
        this.load.css('style','../css/styleCP.css');
    }

	create() {
        this.background();
        this.menu();
	}

    background(){
        let image=this.add.image(this.cameras.main.width / 2, this.cameras.main.height / 2,'fondCP');
        let scaleX = this.cameras.main.width / image.width;
        let scaleY = this.cameras.main.height / image.height;
        let scale = Math.max(scaleX, scaleY);
        image.setScale(scale).setScrollFactor(0);
    }

    menu(){
        let h1=this.add.dom(larg/2,0,'h1',null,'Choisisez Votre Personnage');
        h1.setClassName('title');
        
        var img=document.createElement('img');
        img.src = "../img/perso.jpeg "; 
        var img2=document.createElement('img');
        img2.src = "../img/perso2.jpeg ";
        var img3=document.createElement('img');
        img3.src = "../img/vs.png ";
       
        var container = this.add.container(larg/2, 0);
        var element = this.add.dom(0, 0, img);
        var element2 = this.add.dom(0, 0, img2);
        var element3 = this.add.dom(0, 0, img3);
        element3.setClassName('vs');
        element.setClassName('DrSkull');
        element2.setClassName('Professeur');
        container.add([element,element2,element3]);

        element.addListener('click');
        element.on('click', function (event) {
            game.scene.stop('choixperso');
			game.scene.start('GameScene');
            gameState.perso="Dr.Skull";
        });

        element2.addListener('click');
        element2.on('click', function (event) {
            game.scene.stop('choixperso');
			game.scene.start('GameScene');
            gameState.perso="EL Professor";
        });
    }
}