class Game {
  constructor() {}

  getState() {
   //CONECTAR BD
    });
  }

  update(state) {
    database.ref("/").update({
      gameState: state,
    });
  }


  
  start() {
    player = new Player();
    //Chamar player count
   //chamar form e display

   
//SPRITES CARRO
    //car1 = createSprite(width / 2 - 50, height - 100);
    //add imagem e scale

    // car2 = createSprite(width / 2 + 100, height - 100);
     //add imagem e scale

    //Variavel de matriz
    // cars = [car1, car2];
  }

  handleElements() {
    form.hide();
    form.titleImg.position(40, 50);
    form.titleImg.class("gameTitleAfterEffects");
  }

  play() {
    this.handleElements();

    drawSprites();
  }
}
