window.onload = gallery();
var bd =[ {picture: "img/Gallery/ga- (1).jpeg", name: "pa"},
          {picture: "img/Gallery/ga- (2).jpeg", name: "rafael"},
          {picture: "img/Gallery/ga- (3).jpeg", name: "roberto"},
          {picture: "img/Gallery/ga- (4).jpeg", name: "sentipeia"},
          {picture: "img/Gallery/ga- (5).jpeg", name: "stardew valley"},
          {picture: "img/Gallery/ga- (6).jpeg", name: "motivação"},
          {picture: "img/Gallery/ga- (7).jpeg", name: "urso polar"},
          {picture: "img/Gallery/ga- (8).jpeg", name: "copa"},
          {picture: "img/Gallery/ga- (9).jpeg", name: "morto"}, 
          {picture: "img/Gallery/ga- (10).jpeg", name: "liberdade"}, 
          {picture: "img/Gallery/ga- (11).jpeg", name: "lula"}, 
          {picture: "img/Gallery/ga- (12).jpeg", name: "tardin"}, 
          {picture: "img/Gallery/ga- (13).jpeg", name: "gabriel"}, 
          {picture: "img/Gallery/ga- (14).jpeg", name: "ianne"}, 
          {picture: "img/Gallery/ga- (15).jpeg", name: "igreja"}, 
          {picture: "img/Gallery/ga- (16).jpeg", name: "joel"}, 
          {picture: "img/Gallery/ga- (17).jpeg", name: "burro"}, 
          {picture: "img/Gallery/ga- (18).jpeg", name: "eu e rafael"}, 
          {picture: "img/Gallery/ga- (19).jpeg", name: "backrooms"}, 
          {picture: "img/Gallery/ga- (20).jpeg", name: "fofoca"}, 
          {picture: "img/Gallery/ga- (21).jpeg", name: "fofoca"}, 
          {picture: "img/Gallery/ga- (22).jpeg", name: "fofoca"}, 
          {picture: "img/Gallery/ga- (23).jpeg", name: "fofoca"}, 
          {picture: "img/Gallery/ga- (24).jpeg", name: "fofoca"}, 
          {picture: "img/Gallery/ga- (25).jpeg", name: "fofoca"}, 
          {picture: "img/Gallery/ga- (26).jpeg", name: "fofoca"}, 
          {picture: "img/Gallery/ga- (27).jpeg", name: "fofoca"}
    ];
function gallery(){
    var body = document.getElementById('body');
    for(var i = 1; i<28;i++){
        var img = document.createElement('img');
        img.src = "img/Gallery/ga- ("+i+").jpeg"
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
