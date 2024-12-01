// família, comédia, ação, romance, ficção científica, fantasia, animação

// dançando para amar, LIVRE, família, romance
// um reencontro natalino, LIVRE, romance

// distorção do universo 2, 14, ação, comédia, ficção científica
// wicked, 10, fantasia
// acampamento com a mamãe, 12, comédia, família
// nosso segredinho , 10, comédia, família, romance

let campoIdade;
let campoFamília;
let campoComédia;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de filmes");
  createSpan("Sua idade:");
  campoIdade = createInput("5");
  campoFamília = createCheckbox("Gosta de Família?");
  campoComédia = createCheckbox("Gosta de Comédia?");
}

function draw() {
  background ("white");
  let idade = campoIdade.value();
  let gostaDeFamília = campoFamília.checked();
  let gostaDeComédia = campoComédia.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeFamília, gostaDeComédia);
  
  fill(color(76, 0, 115))
  textAlign(CENTER, CENTER)
  textSize(38);
  text(recomendacao, width/2, height/2);
}

function geraRecomendacao(idade, gostaDeFamília, gostaDeComédia) {
  if(idade >= 10) {
    if(idade >= 14) {
      return "Distorção do Universo 2";
    } else {
      if(idade >= 12) {
        if(gostaDeFamília || gostaDeComédia) {
          return "Acampamento com a Mamãe";
          } else {
          return "Homem-aranha: no aranhaverso";
        }
      } else {
        if(gostaDeFamília) {
          return "Nosso Segredinho";
        } else {
          return "Wicked";
        }
      }
    }
  } else {
    if(gostaDeFamília) {
      return "Dançando para Amar";
    } else {
      return "Um Reencontro Natalino";
    }
  }
}
