window.onload = function(){
    for(i=0;i<=69;i++){
    var div = document.createElement("div");
    div.className="gallery "
    const image = document.createElement("img");
    image.src = "res/img ("+i+").jpeg";
    image.alt = "Fotos da escola";
    div.appendChild(image);
    document.body.appendChild(div);
    }
}