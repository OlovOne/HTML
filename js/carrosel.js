var carImgs = document.querySelectorAll('#carrosel img');
var ImgAtual = 0;

function ProximaImagem() {
carImgs[ImgAtual].style.display = 'none';
ImgAtual = (ImgAtual + 1) % carImgs.length;
carImgs[ImgAtual].style.display = 'block';
}
function ImagemAnterior() {
carImgs[ImgAtual].style.display = 'none';
ImgAtual = (ImgAtual - 1 + carImgs.length)% carImgs.length;
carImgs[ImgAtual].style.display = 'block';
}

document.getElementById('ant').addEventListener('click', ImagemAnterior);
document.getElementById('prox').addEventListener('click', ProximaImagem);
setInterval(ProximaImagem, 3000); // Alterna as imagens a cada 3 segundos
