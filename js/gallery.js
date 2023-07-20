window.onload = gallery();
var bd =[ {picture: "img/back 1.jpg", name: "abate 1"},
          {picture: "img/back 2.jpg", name: "abate 2"},
          {picture: "img/back 3.jpg", name: "abate 3"},
          {picture: "img/back 4.jpg", name: "abate 4"},
          {picture: "img/back 5.jpg", name: "abate 5"},
          {picture: "img/back 6.jpg", name: "abate 6"},
          {picture: "img/back 7.jpg", name: "abate 7"},
          {picture: "img/back 8.jpg", name: "abate 8"} 
    ];
function gallery(){
    var body = document.getElementById('body');
    for(var i = 1; i<9;i++){
        var img = document.createElement('img');
        img.src = "img/back "+i+".jpg"
        body.appendChild(img);
    }
}
function render(item){
    document.getElementById('body').innerHTML=""
    item.forEach(function(item) {
        var img = document.createElement('img');
        img.src = item.picture;
        body.appendChild(img);
    });
}

function searchItems(){
    var serachterm = document.getElementById('sc').value.toLowerCase();
    var filter = [];
    if(serachterm){
        filter = bd.filter(function(item){
            var name = item.name.toLowerCase();
            return name.includes(serachterm);
        });
    }else{
        filter = bd;
    }
    render(filter)
}

document.getElementById('pesquisa').addEventListener("click", searchItems)
