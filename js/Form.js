class Form {
  constructor() {
    this.input = createInput("").attribute("placeholder", "Digite seu nome");
    this.playButton = createButton("Play");
    this.titleImg = createImg("./assets/title.png", "título do jogo");
    this.greeting = createElement("h2");
  }

  setElementsPosition() {
   //exibir pcriar elementos do form e exibir posições
  }


  hide() {
   //ocultar
  }

  //exibir mensagem ao pressionar o botão de play
  handleMousePressed() {
      this.playButton.mousePressed(() => {
      this.input.hide();
      this.playButton.hide();
      var message = `
      Olá ${this.input.value()}
      </br>espere outro jogador entrar...`;
      this.greeting.html(message);
      //aumente o playerCount e atualize o novo valor
      // utilizando a função update.
    

    });
  }
//chamar as funções para serem exibidas
  display() {
  // this.setElementsPosition();
    //this.setElementsStyle();
   // this.handleMousePressed();
  }
}
