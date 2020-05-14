class Accueil extends Phaser.Scene{
    constructor(){
        super({key:'Accueil'});
    }

    preload(){
        this.load.image('accueil','../img/fond22222.jpeg');
        this.load.css('style','../css/accueil.css');
    }

    create(){
        this.background();
        this.menu();
    }

    background(){
        let image=this.add.image(larg/2,haut/2,'accueil');
        let scaleX=larg/image.width;
        let scaleY=haut/image.height;
        let scale=Math.max(scaleX,scaleY);
        image.setScale(scale).setScrollFactor(0);
    }

    menu(){
        let l = larg/5;
        let h = haut/6
        let lev=this.add.dom(larg/2,0,'h1',null,'LEVEL');
        let retour=this.add.dom(4.5*l,4.9*h,'h2',null,'RETOUR');
        console.log(haut);
        retour.addListener('click');
        retour.on('click', function (event) {
            game.scene.stop('Accueil');
            game.scene.start('MainMenu');
        });

        //NIVEAU 0
        let niv0=document.createElement('img');
        niv0.src="../img/table.jpg";
        let elt0=this.add.dom(0.5*l,1.9*h,niv0);

        let cadenas0=document.createElement('img');
        cadenas0.src="../img/cadenas.png";
        cadenas0.setAttribute('class','cadenas');
        let cas0=this.add.dom(0.5*l,1.9*h,cadenas0);
        
        if(gameState.max>=0){

            cas0.destroy();
            elt0.addListener('click');
            elt0.on('click', function (event) {
                game.scene.stop('Accueil');
                game.scene.start('choixperso');
                gameState.level=0;
            });
        }


        //NIVEAU 1
        let niv1=document.createElement('img');
        niv1.src="../img/img1.jpg";
        let elt1=this.add.dom(1.5*l,1.9*h,niv1);
        let cadenas1=document.createElement('img');
        cadenas1.src="../img/cadenas.png";
        cadenas1.setAttribute('class','cadenas');
        let cas1=this.add.dom(1.5*l,1.9*h,cadenas1);
        
        if(gameState.max>=1){
            cas1.destroy();
            elt1.addListener('click');
            elt1.on('click', function (event) {
                game.scene.stop('Accueil');
                game.scene.start('choixperso');
                gameState.level=1;
            });
        }

        //NIVEAU 2
        let niv2=document.createElement('img');
        niv2.src="../img/img5.jpg";
        let elt2=this.add.dom(2.5*l,1.9*h,niv2);
        let cadenas2=document.createElement('img');
        cadenas2.src="../img/cadenas.png";
        cadenas2.setAttribute('class','cadenas');
        let cas2=this.add.dom(2.5*l,1.9*h,cadenas2);
        
        if(gameState.max>=2){
            cas2.destroy();
            elt2.addListener('click');
            elt2.on('click', function (event) {
                game.scene.stop('Accueil');
                game.scene.start('choixperso');
                gameState.level=2;
            });
        }

        //NIVEAU 3
        let niv3=document.createElement('img');
        niv3.src="../img/img2.jpg";
        let elt3=this.add.dom(3.5*l,1.9*h,niv3);
        let cadenas3=document.createElement('img');
        cadenas3.src="../img/cadenas.png";
        cadenas3.setAttribute('class','cadenas');
        let cas3=this.add.dom(3.5*l,1.9*h,cadenas3);
        
        if(gameState.max>=3){
            cas3.destroy();
            elt3.addListener('click');
            elt3.on('click', function (event) {
                game.scene.stop('Accueil');
                game.scene.start('choixperso');
                gameState.level=3;
            });
        }

        //NIVEAU 4
        let niv4=document.createElement('img');
        niv4.src="../img/img3.jpg";
        let elt4=this.add.dom(4.5*l,1.9*h,niv4);
        let cadenas4=document.createElement('img');
        cadenas4.src="../img/cadenas.png";
        cadenas4.setAttribute('class','cadenas');
        let cas4=this.add.dom(4.5*l,1.9*h,cadenas4);
        
        if(gameState.max>=4){
            cas4.destroy();
            elt4.addListener('click');
            elt4.on('click', function (event) {
                game.scene.stop('Accueil');
                game.scene.start('choixperso');
                gameState.level=4;
            });
        }

        //NIVEAU 5
        let niv5=document.createElement('img');
        niv5.src="../img/img4.jpg";
        let elt5=this.add.dom(0.5*l,2.9*h,niv5);
        let cadenas5=document.createElement('img');
        cadenas5.src="../img/cadenas.png";
        cadenas5.setAttribute('class','cadenas');
        let cas5=this.add.dom(0.5*l,2.9*h,cadenas5);
        
        if(gameState.max>=5){
            cas5.destroy();
            elt5.addListener('click');
            elt5.on('click', function (event) {
                game.scene.stop('Accueil');
                game.scene.start('choixperso');
                gameState.level=5;
            });
        }

        //NIVEAU 6
        let niv6=document.createElement('img');
        niv6.src="../img/img9.jpg";
        let elt6=this.add.dom(1.5*l,2.9*h,niv6);
        let cadenas6=document.createElement('img');
        cadenas6.src="../img/cadenas.png";
        cadenas6.setAttribute('class','cadenas');
        let cas6=this.add.dom(1.5*l,2.9*h,cadenas6);
        
        if(gameState.max>=6){
            cas6.destroy();
            elt6.addListener('click');
            elt6.on('click', function (event) {
                game.scene.stop('Accueil');
                game.scene.start('choixperso');
                gameState.level=6;
            });
        }

        //NIVEAU 7
        let niv7=document.createElement('img');
        niv7.src="../img/img6.jpg";
        let elt7=this.add.dom(2.5*l,2.9*h,niv7);
        let cadenas7=document.createElement('img');
        cadenas7.src="../img/cadenas.png";
        cadenas7.setAttribute('class','cadenas');
        let cas7=this.add.dom(2.5*l,2.9*h,cadenas7);
        
        if(gameState.max>=7){
            cas7.destroy();
            elt7.addListener('click');
            elt7.on('click', function (event) {
                game.scene.stop('Accueil');
                game.scene.start('choixperso');
                gameState.level=7;
            });
        }

        //NIVEAU 8
        let niv8=document.createElement('img');
        niv8.src="../img/img7.jpg";
        let elt8=this.add.dom(3.5*l,2.9*h,niv8);
        let cadenas8=document.createElement('img');
        cadenas8.src="../img/cadenas.png";
        cadenas8.setAttribute('class','cadenas');
        let cas8=this.add.dom(3.5*l,2.9*h,cadenas8);
        
        if(gameState.max>=8){
            cas8.destroy();
            elt8.addListener('click');
            elt8.on('click', function (event) {
                game.scene.stop('Accueil');
                game.scene.start('choixperso');
                gameState.level=8;
            });
        }

        //NIVEAU 9
        let niv9=document.createElement('img');
        niv9.src="../img/img10.jpg";
        let elt9=this.add.dom(4.5*l,2.9*h,niv9);
        let cadenas9=document.createElement('img');
        cadenas9.src="../img/cadenas.png";
        cadenas9.setAttribute('class','cadenas');
        let cas9=this.add.dom(4.5*l,2.9*h,cadenas9);
        
        if(gameState.max>=9){
            cas9.destroy();
            elt9.addListener('click');
            elt9.on('click', function (event) {
                game.scene.stop('Accueil');
                game.scene.start('choixperso');
                gameState.level=9;

            });
        }
        
        //NIVEAU 10
        let niv10=document.createElement('img');
        niv10.src="../img/img11.jpg";
        let elt10=this.add.dom(0.5*l,3.9*h,niv10);
        let cadenas10=document.createElement('img');
        cadenas10.src="../img/cadenas.png";
        cadenas10.setAttribute('class','cadenas');
        let cas10=this.add.dom(0.5*l,3.9*h,cadenas10);
        
        if(gameState.max>=10){
            cas10.destroy();
            elt10.addListener('click');
            elt10.on('click', function (event) {
                game.scene.stop('Accueil');
                game.scene.start('choixperso');
                gameState.level=10;
            });
        }

        //NIVEAU 11
        let niv11=document.createElement('img');
        niv11.src="../img/labo2.jpg";
        let elt11=this.add.dom(1.5*l,3.9*h,niv11);
        let cadenas11=document.createElement('img');
        cadenas11.src="../img/cadenas.png";
        cadenas11.setAttribute('class','cadenas');
        let cas11=this.add.dom(1.5*l,3.9*h,cadenas11);
        
        if(gameState.max>=11){
            cas11.destroy();
            elt11.addListener('click');
            elt11.on('click', function (event) {
                game.scene.stop('Accueil');
                game.scene.start('choixperso');
                gameState.level=11;
            });
        }

        //NIVEAU 12
        let niv12=document.createElement('img');
        niv12.src="../img/labo1.jpg";
        let elt12=this.add.dom(2.5*l,3.9*h,niv12);
        let cadenas12=document.createElement('img');
        cadenas12.src="../img/cadenas.png";
        cadenas12.setAttribute('class','cadenas');
        let cas12=this.add.dom(2.5*l,3.9*h,cadenas12);
        
        if(gameState.max>=12){
            cas12.destroy();
            elt12.addListener('click');
            elt12.on('click', function (event) {
                game.scene.stop('Accueil');
                game.scene.start('choixperso');
                gameState.level=12;
            });
        }

        //NIVEAU 13
        let niv13=document.createElement('img');
        niv13.src="../img/lab1.jpg";
        let elt13=this.add.dom(3.5*l,3.9*h,niv13);
        let cadenas13=document.createElement('img');
        cadenas13.src="../img/cadenas.png";
        cadenas13.setAttribute('class','cadenas');
        let cas13=this.add.dom(3.5*l,3.9*h,cadenas13);
        
        if(gameState.max>=13){
            cas13.destroy();
            elt13.addListener('click');
            elt13.on('click', function (event) {
                game.scene.stop('Accueil');
                game.scene.start('ChoixPerso');
                gameState.level=13;
            });
        }

        //NIVEAU 14
        let niv14=document.createElement('img');
        niv14.src="../img/fond2222.jpeg";
        let elt14=this.add.dom(4.5*l,3.9*h,niv14);
        let cadenas14=document.createElement('img');
        cadenas14.src="../img/cadenas.png";
        cadenas14.setAttribute('class','cadenas');
        let cas14=this.add.dom(4.5*l,3.9*h,cadenas14);
        
        if(gameState.max>=14){
            cas14.destroy();
            elt14.addListener('click');
            elt14.on('click', function (event) {
                game.scene.stop('Accueil');
                game.scene.start('choixperso');
                gameState.level=14;
            });
        }

        //NIVEAU 15
        let niv15=document.createElement('img');
        niv15.src="../img/fond22.jpeg";
        let elt15=this.add.dom(0.5*l,4.9*h,niv15);
        let cadenas15=document.createElement('img');
        cadenas15.src="../img/cadenas.png";
        cadenas15.setAttribute('class','cadenas');
        let cas15=this.add.dom(0.5*l,4.9*h,cadenas15);
        
        if(gameState.max>=15){
            cas15.destroy();
            elt15.addListener('click');
            elt15.on('click', function (event) {
                game.scene.stop('Accueil');
                game.scene.start('choixperso');
                gameState.level=15;
            });
        }

        //NIVEAU 16
        let niv16=document.createElement('img');
        niv16.src="../img/fond3game.png";
        let elt16=this.add.dom(1.5*l,4.9*h,niv16);
        let cadenas16=document.createElement('img');
        cadenas16.src="../img/cadenas.png";
        cadenas16.setAttribute('class','cadenas');
        let cas16=this.add.dom(1.5*l,4.9*h,cadenas16);
        
        if(gameState.max>=16){
            cas16.destroy();
            elt16.addListener('click');
            elt16.on('click', function (event) {
                game.scene.stop('Accueil');
                game.scene.start('choixperso');
                gameState.level=16;
            });
        }

        //NIVEAU 17
        let niv17=document.createElement('img');
        niv17.src="../img/fond222.jpeg";
        let elt17=this.add.dom(2.5*l,4.9*h,niv17);
        let cadenas17=document.createElement('img');
        cadenas17.src="../img/cadenas.png";
        cadenas17.setAttribute('class','cadenas');
        let cas17=this.add.dom(2.5*l,4.9*h,cadenas17);
        
        if(gameState.max>=17){
            cas17.destroy();
            elt17.addListener('click');
            elt17.on('click', function (event) {
                game.scene.stop('Accueil');
                game.scene.start('choixperso');
                gameState.level=17;
            });
        }
    }
}