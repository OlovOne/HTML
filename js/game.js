const player = document.querySelector('.player')
let i = 1;
let i2 = 1;
let side = false;
let walk = false;
let width = 0;
let x;
let back = 0;
const loop = setInterval(() => {
    if(walk){
        player.src = "img/sprite/andando-"+i2+".png"
        i2++;
        if(i2 == 6){
            i2=1;
        }
    }else{
        player.src = "img/sprite/parado-"+i+".png"
        i++;
        if(i == 5){
            i=1;
        }
    }
    width = window.innerWidth * 0.4;
    sideChange()
    backMove()
},150)
function backMove(){
    if((x==100 ||width <= x) && walk ){
        if(side){
            back += -40;
        }else{
            back += 40;
        }
        const conteiner = document.querySelector('.conteiner');
        conteiner.style.backgroundPosition = back+"px 0px";
    }

}
document.addEventListener("keydown", ({key}) => {
    const posotinonPlayer = +player.style.left.replace('px',"");
    x = posotinonPlayer;
    console.log(x);
    if(key == 'd'){
        if(x <= width){
            player.style.left = posotinonPlayer + 20;
        }
        x = +player.style.left.replace("px","");
        side = true;
        walk = true;
    }else if(key == 'a'){
        if(x < 100 ){
            player.style.left = posotinonPlayer - 20;
        }
        x = +player.style.left.replace("px","");
        side = false;
        walk = true;
    }

});

document.addEventListener("keyup", ({key}) =>{
    if(key == 'd'){
        walk = false;
    }else if(key == 'a'){
        walk = false;
    }
});

function sideChange(){
    if(side){
        player.classList.add('right')
    }else{
        player.classList.remove('right')
    }
}