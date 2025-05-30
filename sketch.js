let x;//criando variavel x
let y;//criando variavel y
  let distanciaX;
  let distanciaY;
  let distancia;

function setup() {
  createCanvas(400, 400);
  x = random(400);//sorteando numero ate 400
  x = int(x);//transformando p/ numero inteiro
  y = random(400);
  y = int(y);
}

function draw() {
  background("yellow");//fundo da tela roxo(pueple)
  x = x + random(-2,2);//
  y = y + random(-2,2);
  x = constrain(x,0, 400)
  y = constrain(y,0, 400)

  distanciaX = mouseX - x;
  distanciaY = mouseY - y;
  distancia = sqrt(distanciaX * distanciaX + distanciaY * distanciaY);
  circle(mouseX, mouseY, distancia);//com coordenadas aleatorias 
  //e diametro 10
   if(distancia < 100)
      fill("blue")
    circle(mouseX,mouseY,distancia)
  }
  if (distancia < 3) {// e posicaoX do moude for igual a X
    text("Encontrei!", 200, 200);//então mostrar o texto encontrei
    
    noLoop()

  
}
