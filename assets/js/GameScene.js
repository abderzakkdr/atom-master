class GameScene extends Phaser.Scene {
    constructor() {
        super({ key: 'GameScene' });
        this.fireRate = 100;
        this.nextfiretime = 0;
    }
    
    preload() {
        this.load.image('proton', '../img/proton.png');
        this.load.image('neutron', '../img/neutrone.png');
        this.load.image('electron', '../img/electron.png');
        this.load.image('noyau', '../img/sun.png');
        this.load.image('noyau2', '../img/sun.png');
        this.load.image('button', '../img/proton.png');
        this.load.image('button2', '../img/neutron2.png')
        this.load.image('button3', '../img/electron.png')
        this.load.image('fondss', '../img/fond22222.jpeg');
        this.load.image('accept', '../img/valide.png');
        this.load.image('replay', '../img/replay.png');
        this.load.image('atome',table[gameState.level].chemin);
    }
    
    create() {
        this.backgrounde();

        //ChatBot
        window.watsonAssistantChatOptions = {
            integrationID: "f5f31ea1-a306-4b03-9882-424106e64484",
            region: "eu-gb",
            serviceInstanceID: "33cc62ba-dda2-41d7-b5b3-f06e6407ac77",
            onLoad: function(instance) { instance.render(); }
        };
        setTimeout(function(){
          const t=document.createElement('script');
          t.src="https://web-chat.global.assistant.watson.appdomain.cloud/loadWatsonAssistantChat.js";
          document.head.appendChild(t);
        });
        
        this.matter.world.setBounds(larg/2-20,2*haut/5-20,40,40);


        // Noyau 
        gameState.noyau=this.matter.add.image(larg/2,2*haut/5, 'noyau2',null,{
            shape: {
                type: 'circle',
                radius: 0.005
            },
            plugin: {
                attractors: [
                    function (bodyA, bodyB) {
                        return {
                            x: (bodyA.position.x - bodyB.position.x) * 0.001,
                            y: (bodyA.position.y - bodyB.position.y) * 0.001
                        };
                    }
                ]
            }
        }).setStatic(true);
    
        gameState.noyau.setDisplaySize(0.2,0.2);
    
        gameState.creationN=(x,y)=>{
            this.matter.add.image(x, y, 'button2').setDisplaySize(30,23);
        }   
        gameState.creationP=(x,y)=>{
            this.matter.add.image(x, y, 'button').setDisplaySize(30,25);
        }
    
        // Button element
        gameState.buttonproton = this.add.image(2*larg/6,7*haut/10, 'button').setInteractive();
        gameState.buttonneutron = this.add.image(3*larg/6,7*haut/10, 'button2').setInteractive();
        gameState.buttonelectron = this.add.image(4*larg/6,7*haut/10, 'button3').setInteractive();
        gameState.buttonaccept = this.add.image(3*larg/8,23*haut/25, 'accept').setInteractive();
        gameState.buttonrestart = this.add.image(5*larg/8,23*haut/25, 'replay').setInteractive();
        
    
        gameState.bilan = this.add.text(1*larg/25,1*haut/25, '', { fontSize: '3vmin', fill: '#FFFFFF',fontFamily:'AVP',shadow: {offsetX: 2, offsetY: 2, color: '#000', blur: 0, stroke: false, fill: true } });
        gameState.scoreText = this.add.text(3*larg/25,2*haut/25, '', { fontSize: '2.2vmin', fill: '#FFFFFF',fontFamily:'AVP', shadow: {offsetX: 2, offsetY: 2, color: '#000', blur: 0, stroke: false, fill: true }});
        gameState.scoreText2 = this.add.text(3*larg/25, 3*haut/25, '', { fontSize: '2.2vmin', fill: '#FFFFFF',fontFamily:'AVP',shadow: {offsetX: 2, offsetY: 2, color: '#000', blur: 0, stroke: false, fill: true }});
        gameState.scoreText3 = this.add.text(3*larg/25, 4*haut/25, '', { fontSize: '2.2vmin', fill: '#FFFFFF',fontFamily:'AVP',shadow: {offsetX: 2, offsetY: 2, color: '#000', blur: 0, stroke: false, fill: true }});
        gameState.scoreText4 = this.add.text(3*larg/25, 5*haut/25, '', { fontSize: '2.2vmin', fill: '#FFFFFF',fontFamily:'AVP',shadow: {offsetX: 2, offsetY: 2, color: '#000', blur: 0, stroke: false, fill: true }});
        gameState.scoreText5 = this.add.text(3*larg/25, 6*haut/25, '', { fontSize: '2.2vmin', fill: '#FFFFFF',fontFamily:'AVP' ,shadow: {offsetX: 2, offsetY: 2, color: '#000', blur: 0, stroke: false, fill: true }});
        
       
        gameState.name = this.add.text(31.2*larg/50, 19*haut/25, '', { fontSize: '2.7vmin', fill: '#FFFFFF',fontFamily:'AVP', shadow: {offsetX: 2, offsetY: 2, color: '#000', blur: 0, stroke: false, fill: true }});
        gameState.name2 = this.add.text(14.4*larg/50, 19*haut/25, '', { fontSize: '2.7vmin', fill: '#FFFFFF',fontFamily:'AVP', shadow: {offsetX: 2, offsetY: 2, color: '#000', blur: 0, stroke: false, fill: true }});
        gameState.name3 = this.add.text(22.9*larg/50, 19*haut/25, '', { fontSize: '2.7vmin', fill: '#FFFFFF',fontFamily:'AVP', shadow: {offsetX: 2, offsetY: 2, color: '#000', blur: 0, stroke: false, fill: true }});
    
        gameState.name.setText(`Electron`);
        gameState.name2.setText(`Proton`);
        gameState.name3.setText(`Neutron`);
        gameState.bilan.setText(`Bilan : `);
    
        // Création d'un groupe d'element
        
        gameState.electron = this.add.group();
        gameState.electron2 = this.add.group();
        gameState.electron3 = this.add.group();
    
        var imgeee = document.createElement('img');

        imgeee.src = table[gameState.level].chemin;
        gameState.atome = this.add.dom(4*larg/25, 14*haut/25, imgeee, 'width: 20vmin; height: 27vmin');
        gameState.atome.setClassName("atome");

    
        // Creation de different cercle
        var graphics = this.add.graphics({ lineStyle: { width: 1, color: 0xffffff }, fillStyle: { color: 0xffffff }});
        var cercle = new Phaser.Geom.Circle(larg/2,2*haut/5, 200);
        graphics.strokeCircleShape(cercle);
        
        var cercle3 = new Phaser.Geom.Circle(larg/2,2*haut/5, 80);
        graphics.strokeCircleShape(cercle3);
    
        var cercle2 = new Phaser.Geom.Circle(larg/2,2*haut/5, 140);
        graphics.strokeCircleShape(cercle2);        
    

        // Score
        gameState.scoreelectronK = 0;
        gameState.scoreelectronL = 0;
        gameState.scoreelectronM = 0;
        gameState.scoreproton = 0;
        gameState.scoreneutron = 0;



        if (gameState.perso == "Dr.Skull") {
            var imge = document.createElement('img');
            imge.src = "../img/perso.jpeg ";
            gameState.elemente = this.add.dom(23*larg/25, 3*haut/25, imge, 'width: 150px; height: 150px');
        }
        else {
            var imge2 = document.createElement('img');
            imge2.src = "../img/perso2.jpeg ";
            gameState.elemente2 = this.add.dom(23*larg/25, 3*haut/25, imge2, 'width: 150px; height: 150px');
        }


        // Drag and drop
        this.input.setDraggable(gameState.buttonproton);
        this.input.setDraggable(gameState.buttonneutron);
        this.input.setDraggable(gameState.buttonelectron);
        
        this.input.on('drag', function (pointer, gameObject, dragX, dragY) {
            gameObject.x = dragX;
            gameObject.y = dragY;
            gameObject.setDisplaySize(30, 24);
        });
    
        this.input.on('dragend', function (pointer, gameObject) {
            if(gameObject==gameState.buttonelectron){
                if(Phaser.Geom.Circle.ContainsPoint(cercle, gameObject)==true &&Phaser.Geom.Circle.ContainsPoint(cercle2, gameObject)==false){
                    gameState.electron.create(0, 0, 'electron').setDisplaySize(30, 25);
                    gameState.x += 10;
                    gameState.scoreelectronM += 1;
                    gameObject.x=4*larg/6;
                    gameObject.y=7*haut/10;
                    gameObject.setDisplaySize(116, 94);
                }
            }

            if(gameObject==gameState.buttonelectron){
                if(Phaser.Geom.Circle.ContainsPoint(cercle2, gameObject)==true && Phaser.Geom.Circle.ContainsPoint(cercle3, gameObject)==false ){
                    gameState.electron2.create(0, 0, 'electron').setDisplaySize(30, 25);
                    gameState.scoreelectronL += 1;
                    gameObject.x=4*larg/6;
                    gameObject.y=7*haut/10;
                    gameObject.setDisplaySize(116, 94);
                }
            }
    
            if(gameObject==gameState.buttonelectron){
                if(Phaser.Geom.Circle.ContainsPoint(cercle3, gameObject)==true ){
                    gameState.electron3.create(0, 0, 'electron').setDisplaySize(30, 25);
                    gameState.scoreelectronK += 1;
                    gameObject.x=4*larg/6;
                    gameObject.y=7*haut/10;
                    gameObject.setDisplaySize(116, 94);
                }
            }
    
            if(gameObject==gameState.buttonproton){
                if(Phaser.Geom.Circle.ContainsPoint(cercle3, gameObject)){
                        gameState.creationP(gameObject.x,gameObject.y);
                        gameState.scoreproton += 1;
                        gameObject.x=2*larg/6;
                        gameObject.y=7*haut/10;
                        gameObject.setDisplaySize(118, 95);
                }
            }

            if(gameObject==gameState.buttonneutron){
                if(Phaser.Geom.Circle.ContainsPoint(cercle3, gameObject)==true){
                    gameState.creationN(gameObject.x,gameObject.y);
                    gameState.scoreneutron += 1;
                    gameObject.x=3*larg/6;
                    gameObject.y=7*haut/10;
                    gameObject.setDisplaySize(116, 87);
                }
            }
    
            if(gameObject==gameState.buttonelectron){
                if(Phaser.Geom.Circle.ContainsPoint(cercle2, gameObject)==true){
                    gameObject.x=4*larg/6;
                    gameObject.y=7*haut/10;
                    gameObject.setDisplaySize(116, 94);
                }
            }

            if(gameObject==gameState.buttonelectron){
                if(Phaser.Geom.Circle.ContainsPoint(cercle, gameObject)==false){
                    gameObject.x=4*larg/6;
                    gameObject.y=7*haut/10;
                    gameObject.setDisplaySize(116, 94);
                }
            }

            if(gameObject==gameState.buttonproton){
                if(Phaser.Geom.Circle.ContainsPoint(cercle2, gameObject)==false){
                        gameObject.x=2*larg/6;
                        gameObject.y=7*haut/10;
                        gameObject.setDisplaySize(118, 95);
                }
            }

            if(gameObject==gameState.buttonneutron){
                if(Phaser.Geom.Circle.ContainsPoint(cercle2, gameObject)==false){
                    gameObject.x=3*larg/6;
                    gameObject.y=7*haut/10;
                    gameObject.setDisplaySize(116, 87);
                }
            }

            if(gameObject==gameState.buttonproton){
                if(Phaser.Geom.Circle.ContainsPoint(cercle2, gameObject)==true){
                        gameObject.x=2*larg/6;
                        gameObject.y=7*haut/10;
                        gameObject.setDisplaySize(118, 95);
                }
            }

            if(gameObject==gameState.buttonneutron){
                if(Phaser.Geom.Circle.ContainsPoint(cercle2, gameObject)==true){
                    gameObject.x=3*larg/6;
                    gameObject.y=7*haut/10;
                    gameObject.setDisplaySize(116, 87);
                }
            }
        });
    }
    

    update() {
    
        // Recupere tout les enfant du groupe en question pour le donner une rotation
        Phaser.Actions.RotateAroundDistance(gameState.electron.getChildren(), { x: larg/2, y: 2*haut/5 }, 0.015, 200);
        Phaser.Actions.RotateAroundDistance(gameState.electron2.getChildren(), { x: larg/2, y: 2*haut/5 }, 0.025, 140);
        Phaser.Actions.RotateAroundDistance(gameState.electron3.getChildren(), { x: larg/2, y: 2*haut/5 }, 0.035, 80);
        

        gameState.scoreText.setText(`-Electron Couche (K): ${gameState.scoreelectronK}`);
        gameState.scoreText2.setText(`-Electron Couche (L): ${gameState.scoreelectronL}`);
        gameState.scoreText3.setText(`-Electron Couche (M): ${gameState.scoreelectronM}`);
        gameState.scoreText4.setText(`-Proton (s): ${gameState.scoreproton}`);
        gameState.scoreText5.setText(`-Neutron (s): ${gameState.scoreneutron}`);
        gameState.Vainqueur=this.verification();
    
        gameState.buttonaccept.once('pointerup', function () {
               if(this.time.now>this.nextfiretime){
                    this.nextfiretime=this.time.now+this.fireRate;
                    this.scene.pause('GameScene');
                    this.scene.start('Verification');
                }
            }, this);

            gameState.buttonrestart.once('pointerup', function () {
                if(this.time.now>this.nextfiretime){
                     this.nextfiretime=this.time.now+this.fireRate;
                     this.scene.pause('GameScene');
                     this.scene.start('GameScene');
                }
             }, this);  
        
  
    }
    

    verification(){
        var nbr_proton=gameState.scoreproton;
        var nbr_neutron=gameState.scoreneutron;
        if(nbr_neutron==table[gameState.level].nucleon-table[gameState.level].electron && gameState.scoreelectronK==table[gameState.level].K&&gameState.scoreelectronL==table[gameState.level].L &&gameState.scoreelectronM==table[gameState.level].M && nbr_proton==table[gameState.level].electron){
            return true;
        }
        else{
            return false;
        }
    }
    
    
    backgrounde() {
        let image = this.add.image(this.cameras.main.width / 2, this.cameras.main.height / 2, 'fondss');
        let scaleX = this.cameras.main.width / image.width;
        let scaleY = this.cameras.main.height / image.height;
        let scale = Math.max(scaleX, scaleY);
        image.setScale(scale).setScrollFactor(0);
    }
    

    pop_up(valeur){
        if(valeur == true){
                window.open('Victoire.html','verif','menubar=no, scrollbars=no, top=100, left=100, width=300, height=200');
        }
        else{
            window.open('Victoire.html','verif','menubar=no, scrollbars=no, top=100, left=100, width=300, height=200');
        }                
    }
}