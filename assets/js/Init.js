//var larg = (window.innerWidth);
//var haut = (window.innerHeight);

const gameState = {
	firstTime: true,
	level: 0,
	max:0,
};

const config = {
	type: Phaser.AUTO,
	width: larg,
	height: haut,
	parent: 'jeu',
    dom: {
        createContainer: true
    },
	scene: [MainMenu,OptionMenu,Accueil,ChoixPerso,GameScene,Verification],
	physics: {
		default: 'matter',
		   matter: {
			   gravity: {
				   scale: 0
			   },
			   plugins: {
				   attractors: true
			   }
		   }
	   },
  
};

const game = new Phaser.Game(config);
