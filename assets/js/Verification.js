class Verification extends Phaser.Scene {
constructor() {
    super({ key: 'Verification' });
    this.fireRate = 100;
    this.nextfiretime = 0;
   
}

preload() {
    this.load.image('fondss', '../img/fond22222.jpeg');
    this.load.image('accept', '../img/valide.png');
    this.load.image('replay', '../img/replay.png');   
}

create() {
    
    this.backgrounde();

    if(gameState.Vainqueur ==true){
        if(gameState.max <= gameState.level){
            gameState.max=gameState.level+1;
        }
    }

    gameState.title = this.add.text(larg/3, haut/14, '', { fontSize: '9vmin', fill: '#FFFFFF',fontFamily:'AVP', shadow: {offsetX: 2, offsetY: 2, color: '#000', blur: 0, stroke: false, fill: true }}).setText("Resultat");
    gameState.scoreTex = this.add.text(6*larg/25,7*haut/25, '', { fontSize: '25px', fill: '#FFFFFF',fontFamily:'AVP',shadow: {offsetX: 2, offsetY: 2, color: '#000', blur: 0, stroke: false, fill: true }});
    gameState.scoreTex2 = this.add.text(6*larg/25,9*haut/25, '', { fontSize: '25px', fill: '#FFFFFF',fontFamily:'AVP',shadow: {offsetX: 2, offsetY: 2, color: '#000', blur: 0, stroke: false, fill: true }});
    gameState.scoreTex3 = this.add.text(6*larg/25,11*haut/25, '', { fontSize: '25px', fill: '#FFFFFF',fontFamily:'AVP',shadow: {offsetX: 2, offsetY: 2, color: '#000', blur: 0, stroke: false, fill: true }});
    gameState.scoreTex4 = this.add.text(6*larg/25,13*haut/25, '', { fontSize: '25px', fill: '#FFFFFF',fontFamily:'AVP',shadow: {offsetX: 2, offsetY: 2, color: '#000', blur: 0, stroke: false, fill: true }});
    gameState.scoreTex5 = this.add.text(6*larg/25,15*haut/25, '', { fontSize: '25px', fill: '#FFFFFF',fontFamily:'AVP' ,shadow: {offsetX: 2, offsetY: 2, color: '#000', blur: 0, stroke: false, fill: true }});
    

    if(gameState.scoreproton==table[gameState.level].electron){
        gameState.scoreTex.setText(`Vous avez  le bon nombre de proton`);
    }
    else{
        gameState.scoreTex.setText(`Le nombre de proton est incorrect`);
    }
    if(gameState.scoreneutron==table[gameState.level].nucleon-table[gameState.level].electron){
        gameState.scoreTex2.setText(`Vous avez  le bon nombre  de neutron`);
    }
    else{
        gameState.scoreTex2.setText(`Le nombre de neutron est incorrect`);
    }
    if(gameState.scoreelectronK==table[gameState.level].K){
        gameState.scoreTex3.setText(`Vous avez le bon nombre d'electron sur la couche K`);
    }
    else{
        gameState.scoreTex3.setText(`Le nombre d'electron sur la couche K est incorrect`);
    }
    if(gameState.scoreelectronL==table[gameState.level].L){
        gameState.scoreTex4.setText(`Vous avez le bon nombre d'electron sur la couche L`);
    }
    else{
        gameState.scoreTex4.setText(`Le nombre d'electron sur la couche L est incorrect`);
    }
    if(gameState.scoreelectronM==table[gameState.level].M){
        gameState.scoreTex5.setText(`Vous avez le bon nombre d'electron sur la couche M`);
    }
    else{
        gameState.scoreTex5.setText(`Le nombre d'electron sur la couche M est incorrect`);
    }

    gameState.buttonaccepte = this.add.text(4*larg/25,20*haut/25, '', { fontSize: '75px', fill: '#FFFFFF',fontFamily:'AVP' }).setInteractive().setText(`Niveaux`);
    gameState.buttonrestarte = this.add.text(12*larg/25,20*haut/25, '', { fontSize: '75px', fill: '#FFFFFF',fontFamily:'AVP' }).setInteractive().setText(`Recommencer`);
    



}

update() {
    gameState.buttonaccepte.once('pointerup', function () {
           if(this.time.now>this.nextfiretime){
            this.nextfiretime=this.time.now+this.fireRate;
            this.scene.pause('Verification');
            this.scene.start('Accueil');
            
           }
        }, this);
    
    gameState.buttonrestarte.once('pointerup', function () {
           if(this.time.now>this.nextfiretime){
            this.nextfiretime=this.time.now+this.fireRate;
            this.scene.start('GameScene');
           }
        }, this);


}


backgrounde() {
    let image = this.add.image(this.cameras.main.width / 2, this.cameras.main.height / 2, 'fondss');
    let scaleX = this.cameras.main.width / image.width;
    let scaleY = this.cameras.main.height / image.height;
    let scale = Math.max(scaleX, scaleY);
    image.setScale(scale).setScrollFactor(0);

}

}