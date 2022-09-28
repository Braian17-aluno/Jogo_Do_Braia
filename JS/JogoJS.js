// mover inimigos - automático
function moverdireita2(){
    //let div1Left=parseInt(getComputedStyle(div1).left);
    let div2Left= parseInt(getComputedStyle(div2).left);
    let fundoWidth= parseInt(getComputedStyle(fundo).width);
    let div2Width= parseInt(getComputedStyle(div2).width);
    //let div1Width= parseInt(getComputedStyle(div1).width);

    div2.style.left = div2Left +5;
    //div1.style.left = div1Left +5;
    if ( div2Left >=  fundoWidth - div2Width){
        clearInterval(z);
        z = setInterval ("moveresquerda2()",15);
    }
}
function moveresquerda2(){
    let div2Left= parseInt(getComputedStyle(div2).left);
    div2.style.left = div2Left -5;
    if (div2Left <= 0){
        clearInterval(z);
        z = setInterval ("moverdireita2()",15);
    }
}
function moverdireita1(){
    let div1Left=parseInt(getComputedStyle(div1).left);
    let fundoWidth= parseInt(getComputedStyle(fundo).width);
    let div1Width= parseInt(getComputedStyle(div1).width);
    div1.style.left = div1Left +5;
    if (div1Left >=  fundoWidth - div1Width){
        clearInterval(m);
        m = setInterval ("moveresquerda1()",15);
    }
}
function moveresquerda1(){
    let div1Left= parseInt(getComputedStyle(div1).left);
    div1.style.left = div1Left -5;
    if (div1Left <= 0){
        clearInterval(m);
        m = setInterval ("moverdireita1()",15);
    }
}

//Player
let player = document.querySelector('.player');
let moveBy = 2;
window.addEventListener('load', () => {
player.style.position = 'absolute';
player.style.left = 0;
player.style.top = 0;
});
window.addEventListener('keydown', (e) => {
    let area = document.querySelector("#area");
    let areaWidth = parseInt(getComputedStyle(area).width)
    let fundoHeight = parseInt(getComputedStyle(fundo).height);
    let playerLeft= parseInt(getComputedStyle(player).left);
    let playerTop = parseInt(getComputedStyle(player).top);
    let playerWidth = parseInt(getComputedStyle(player).width);
    let playerHeight= parseInt(getComputedStyle(player).height);

switch (e.key) {
case 'a':
if (playerLeft <= 0){
        break;
}
player.style.left = parseInt(player.style.left) - moveBy + 'vw';
        break;

case 'd':
if (playerLeft >= areaWidth  - playerWidth){
        break;
}
player.style.left = parseInt(player.style.left) + moveBy + 'vw';
        break;
case 'w':
if (playerTop<= 0){
        break;
}
player.style.top = parseInt(player.style.top) - moveBy + 'vw';
        break;
case 's':
if (playerTop >= fundoHeight  - playerHeight){
        break;
}
player.style.top = parseInt(player.style.top) + moveBy + 'vw';
        break;
}
    
});
/*
if (circle >= fundoWidth  - circleWidth){
window.addEventListener('load', () => {
circle.style.position = 'absolute';
circle.style.left = 10;
circle.style.top = 0;
});
}
*/


// Mover player  - através dos botões
function move(Direcao) {

    let area = document.querySelector("#area");
    let areaWidth = parseInt(getComputedStyle(area).width)
    let fundoHeight = parseInt(getComputedStyle(fundo).height);
    let playerLeft= parseInt(getComputedStyle(player).left);
    let playerTop = parseInt(getComputedStyle(player).top);
    let playerWidth = parseInt(getComputedStyle(player).width);
    let playerHeight= parseInt(getComputedStyle(player).height);

    switch(Direcao){
        case "acima": 

        if (playerTop<= 0){
            break;
        }
        player.style.top = parseInt(player.style.top) - moveBy + 'vw';
        break;

        case "baixo":
    
        if (playerTop >= fundoHeight  - playerHeight){
                break;
        }
        player.style.top = parseInt(player.style.top) + moveBy + 'vw';
                break;
        
        case "esquerda":

        if (playerLeft <= 0){
                break;
        }
        player.style.left = parseInt(player.style.left) - moveBy + 'vw';
                break;
        
        case "direita":

        if (playerLeft >= areaWidth  - playerWidth){
                break;
        }
        player.style.left = parseInt(player.style.left) + moveBy + 'vw';
                break;
    }
    

}

    /*
    if (contador != 0) {
        para();
    }
    if (Direcao == "direita") {
        timer = setInterval("direita()",15);
        contador ++;
    }

    if (Direcao == "esquerda") {
        timer = setInterval("esquerda()",15);
        contador ++;
    }

    if (Direcao == "acima") {
        timer = setInterval("acima()",15);
        contador ++;
    }

    if (Direcao == "baixo") {
        timer = setInterval("baixo()",15);
        contador ++;
    }
    */


/*
function direita() {
    let div1Left= parseInt(getComputedStyle(div1).left);
    let fundoWidth= parseInt(getComputedStyle(fundo).width);
    let div1Width= parseInt(getComputedStyle(div1).width);

    div1.style.left = div1Left+5;
    if ( div1Left >= fundoWidth  - div1Width){
        clearInterval(timer);
        timer = setInterval ("esquerda()",15);
    }
}

function esquerda() {
    let div1Left= parseInt(getComputedStyle(div1).left);
    
    div1.style.left = div1Left-5;
    if ( div1Left <= 0){
        clearInterval(timer);
        timer = setInterval ("direita()",15);
    }
}

function baixo() {
    let div1Top= parseInt(getComputedStyle(div1).top);
    let fundoHeight= parseInt(getComputedStyle(fundo).height);
    let div1Height= parseInt(getComputedStyle(div1).height);

    div1.style.top = div1Top+5;
    if(div1Top >= fundoHeight - div1Height){
        clearInterval(timer);
    timer = setInterval("acima()",15);
    }
}
function acima() {
    let div1Top= parseInt(getComputedStyle(div1).top);

    div1.style.top = div1Top-5;
    if(div1Top <= 0 ){
    clearInterval(timer);
    timer = setInterval("baixo()",15);
    }
}*/
/*
// Parar cursores
function para2(){
    clearInterval(m);
}
function para() {
    clearInterval(timer);
}
*/
function para3(){
    let area = document.querySelector("#area")
    let player = document.querySelector('.player');
    area.removeChild(player);

}

/*

function altura(parametro) {
    div1.style.height = parseInt(getComputedStyle(div1).height)+parametro;
}

function largura(parametro) {
    div1.style.width = parseInt(getComputedStyle(div1).width)+parametro;
}
function cor(){
if(cont == 0){
    div1.style.backgroundColor="blue";
    cont++;
}else{
    if(cont == 1){
        div1.style.backgroundColor="orange";
        cont++;
       }else{
       if(cont == 2){
        div1.style.backgroundColor="yellow";
        cont = 0;
        }
    }
}

}
*/
    function colisao(){
    
    let div1Left= parseInt(getComputedStyle(div1).left);
    let div1Top= parseInt(getComputedStyle(div1).top);
    let div1Height= parseInt(getComputedStyle(div1).height);
    let div1Width= parseInt(getComputedStyle(div1).width);

    let div2Left= parseInt(getComputedStyle(div2).left);
    let div2Top= parseInt(getComputedStyle(div2).top);
    let div2Height= parseInt(getComputedStyle(div2).height);
    let div2Width= parseInt(getComputedStyle(div2).width);

    let playerLeft= parseInt(getComputedStyle(player).left);
    let playerTop = parseInt(getComputedStyle(player).top);
 /*   let playerWidth = parseInt(getComputedStyle(player).width);
    let playerHeight= parseInt(getComputedStyle(player).height);
    
    let fundoHeight= parseInt(getComputedStyle(fundo).height);
    let fundoWidth= parseInt(getComputedStyle(fundo).width);



        if (((div1Left >= div2Left)&&(div1Left <= div2Left + div2Width))&&
            ((div1Top >= div2Top)&&(div1Top <= div2Top + div2Height))){
                para2();
                para();
        }
        if (((div2Left >= div1Left)&&(div2Left <= div1Left + div1Width))&&
            ((div2Top >= div1Top)&&(div2Top <= div1Top + div1Height))){
                para2();
                para();
        }
        
        */
        if (((playerLeft >= div1Left)&&(playerLeft <= div1Left + div1Width))&&
            ((playerTop >= div1Top)&&(playerTop <= div1Top + div1Height))){
                para3();
                
        }
        
        if (((playerLeft >= div2Left)&&(playerLeft <= div2Left + div2Width))&&
            ((playerTop >= div2Top)&&(playerTop <= div2Top + div2Height))){
                para3();
                
            
        }
        

    }
    



//Ao carregar a página estas linhas são executadas. 
        let contador = 0;
        let cont = 0;
        let m = setInterval("moverdireita1()", 15); //Funções que são chamadas a cada 15 e 5 milisegundos
        let z = setInterval("moverdireita2()", 15);
        let n = setInterval("colisao()", 5);

document.querySelector("#acima").addEventListener("onkeydown", ()=>{move('acima')});
document.querySelector("#esquerda").addEventListener("click",()=>{ move('esquerda')});
document.querySelector("#direita").addEventListener("click",()=>{ move('direita')});
document.querySelector("#baixo").addEventListener("click",()=>{ move('baixo')});
document.querySelector("#acima").addEventListener("click", ()=>{move('acima')});
/*
document.querySelector("#alturaMais").addEventListener("click", ()=>{altura(15)});
document.querySelector("#alturaMenos").addEventListener("click", ()=>{altura(-15)});
document.querySelector("#larguraMais").addEventListener("click", ()=>{largura(15)});
document.querySelector("#larguraMenos").addEventListener("click", ()=>{largura(-15)});
document.querySelector("#cor").addEventListener("click", ()=>{cor()});

document.querySelector("#para").addEventListener("click",()=>{ para()});
document.querySelector("#para2").addEventListener("click", ()=>{para2()});*/