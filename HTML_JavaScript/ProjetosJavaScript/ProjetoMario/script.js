
const mario = document.querySelector('.mario');
const cano = document.querySelector('.cano');
var pontos = 0;
var pontuacao = document.querySelector('.pontuacao');
pontuacao.innerHTML = "Pontos: 0";

const jump = () =>{
    mario.classList.add("jump");
    
    setTimeout(() => {
        mario.classList.remove("jump");
    }, 710);
    
}



const loop = setInterval(() =>{
  
    const canoPosition = cano.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    console.log(marioPosition);
    if(canoPosition <= 120  && canoPosition > 0 && marioPosition < 90){

        cano.style.animation = 'none';
        cano.style.left = `${canoPosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;
        mario.src = 'imagens/gameover.png';
        mario.style.width = '80px';
        mario.style.marginLeft = '65px';

        clearInterval(loop);
        
    }
    if(canoPosition <= 110 && canoPosition > 107.5){
        pontos++;
        HTMLTemporario = pontuacao.innerHTML,
        HTMLNovo = `Pontos: ${pontos}`;
        HTMLTemporario = HTMLNovo;
        pontuacao.innerHTML = HTMLTemporario;
    }

}, 17)

document.addEventListener("keydown", jump);