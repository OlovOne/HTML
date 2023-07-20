var carImg = document.querySelectorAll('#carrosel img');
var img = 0;

function proximaImage(){
    carImg[img].style.display = 'none';
    img = (img + 1) % carImg.length;
    carImg[img].style.display = 'block';
}
function ImageAnterior() {
    carImg[img].style.display = 'none';
    img = (img - 1 + carImg.length)% carImg.length;
    carImg[img].style.display = 'block';
}

document.getElementById('ant').addEventListener('click', ImageAnterior);
document.getElementById('prox').addEventListener('click', proximaImage);
setInterval(proximaImage, 3000); 