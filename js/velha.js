var player_top;
var game = [];
var s = 0;

window.onload = load;
document.getElementById("campo-0").addEventListener("click",function(){
    if(document.getElementById('campo-0').innerHTML == "" && s == 0){
        render(document.getElementById('campo-0'))
        game[0] = player_top;
        check()
    }
});
document.getElementById("campo-1").addEventListener("click",function(){
    if(document.getElementById('campo-1').innerHTML == "" && s == 0){
        render(document.getElementById('campo-1'))
        game[1] = player_top;
        check()
    }
});
document.getElementById("campo-2").addEventListener("click",function(){
    if(document.getElementById('campo-2').innerHTML == "" && s == 0){
        render(document.getElementById('campo-2'))
        game[2] = player_top;
        check()
    }
});
document.getElementById("campo-3").addEventListener("click",function(){
    if(document.getElementById('campo-3').innerHTML == "" && s == 0){
        render(document.getElementById('campo-3'))
        game[3] = player_top;
        check()
    }
});
document.getElementById("campo-4").addEventListener("click",function(){
    if(document.getElementById('campo-4').innerHTML == "" && s == 0){
        render(document.getElementById('campo-4'))
        game[4] = player_top;
        check()
    }
});
document.getElementById("campo-5").addEventListener("click",function(){
    if(document.getElementById('campo-5').innerHTML == "" && s == 0){
        render(document.getElementById('campo-5'))
        game[5] = player_top;
        check()
    }
});
document.getElementById("campo-6").addEventListener("click",function(){
    if(document.getElementById('campo-6').innerHTML == "" && s == 0){
        render(document.getElementById('campo-6'))
        game[6] = player_top;
        check()
    }
});
document.getElementById("campo-7").addEventListener("click",function(){
    if(document.getElementById('campo-7').innerHTML == "" && s == 0){
        render(document.getElementById('campo-7'))
        game[7] = player_top;
        check()
    }
});
document.getElementById("campo-8").addEventListener("click",function(){
    if(document.getElementById('campo-8').innerHTML == "" && s == 0){
        render(document.getElementById('campo-8'))
        game[8] = player_top;
        check()
    }
});
function load(){
    player_top = 0
    document.getElementById("title").innerHTML = "Jogando.....";
}
function player_current(player){
    if(player == 0){
        player_top = 1;
    }else{
        player_top = 0;
    }
}
function render(index){
    if(player_top == 0){
        player_current(player_top)
        index.appendChild(creatX())
    }else{
        player_current(player_top)
        index.appendChild(creatCirculo())
    }
}
function creatX(){
    var x = document.createElement('div');
    var x_1 = document.createElement('div');
    var x_2 = document.createElement('div');
        x.className = 'x';
        x_1.className = 'x-1';
        x_2.className = 'x-2';
    x.appendChild(x_1);
    x.appendChild(x_2);
    return x;
}
function creatCirculo(){
    var circulo = document.createElement('div');
    circulo.className = 'circulo';
    return circulo;
}
function win(player,index1,index2,index3, p){
    if(player == 1){
        document.getElementById("title").innerHTML = "O Ganhador é o X";
    }else{
        document.getElementById("title").innerHTML = "O Ganhador é o circulo ";
    }
    
    s = 1;
   if(p == 0){
    document.getElementById("campo-"+index1).appendChild(creatLinhav())
    document.getElementById("campo-"+index2).appendChild(creatLinhav())
    document.getElementById("campo-"+index3).appendChild(creatLinhav())
   }else if(p == 1){
    document.getElementById("campo-"+index1).appendChild(creatLinha())
    document.getElementById("campo-"+index2).appendChild(creatLinha())
    document.getElementById("campo-"+index3).appendChild(creatLinha())
   }else if(p == 2){
    document.getElementById("campo-"+index1).appendChild(creatLinhad2())
    document.getElementById("campo-"+index2).appendChild(creatLinhad2())
    document.getElementById("campo-"+index3).appendChild(creatLinhad2())
   }else if(p== 3){
    document.getElementById("campo-"+index1).appendChild(creatLinhad())
    document.getElementById("campo-"+index2).appendChild(creatLinhad())
    document.getElementById("campo-"+index3).appendChild(creatLinhad())
   }
}
function check(){ 
    for(var i = 0; i<2;i++){
        if(game[0] == i && game[3] == i && game[6] == i){
            // Vertical
            win(i,0,3,6,0);
        }else if(game[1] == i && game[4] == i && game[7] == i){
            // Vertical
            win(i,1,4,7,0);
        }else if(game[2] == i && game[5] == i && game[8] == i){
            // Vertical
            win(i,2,5,8,0);
        }else if(game[0] == i && game[1] == i && game[2] == i){
            // horixontal
            win(i,0,1,2,1);
        }else if(game[3] == i && game[4] == i && game[5] == i){
            // horixontal
            win(i,3,4,5,1);
        }else if(game[6] == i && game[7] == i && game[8] == i){
            // horixontal
            win(i,6,7,8,1);
        }else if(game[2] == i && game[4] == i && game[6] == i){
             //diagonal
            win(i,2,4,6,2);
        }else if(game[0] == i && game[4] == i && game[8] == i){
             //diagonal
            win(i,0,4,8,3);
        }
    }
}
function creatLinha(){
    var linha = document.createElement('div')
        linha.className = 'linha'
    return linha;
}
function creatLinhav(){
    var linha = document.createElement('div')
        linha.className = 'linha-v'
    return linha;
}
function creatLinhad(){
    var linha = document.createElement('div')
        linha.className = 'linha-d'
    return linha;
}function creatLinhad2(){
    var linha = document.createElement('div')
        linha.className = 'linha-d-2'
    return linha;
}
document.getElementById("restart").addEventListener("click", function(){
    game = [];
    s = 0;
    player_top = 0;
    document.getElementById('campo-0').innerHTML = ""
    document.getElementById('campo-1').innerHTML = ""
    document.getElementById('campo-2').innerHTML = ""
    document.getElementById('campo-3').innerHTML = ""
    document.getElementById('campo-4').innerHTML = ""
    document.getElementById('campo-5').innerHTML = ""
    document.getElementById('campo-6').innerHTML = ""
    document.getElementById('campo-7').innerHTML = ""
    document.getElementById('campo-8').innerHTML = ""
    document.getElementById("title").innerHTML = "Jogando.....";
});
