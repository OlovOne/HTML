window.onload = function(){
let ul = document.getElementById("list");
let li = document.createElement("li");

let divBook = document.createElement("div");
divBook.className = "book";
let divPicture = document.createElement("div");
divPicture.className ="book-picture";
let divInfo = document.createElement("div");
divInfo.className ="book-info"

let aImg = document.createElement("a");
aImg.href="#"
let aInfo = document.createElement("a");

let picture = document.createElement("img");
picture.className="picture";
picture.src="img/hp_adult_1.webp"
let h1Title = document.createElement("h1");
h1Title.className="title";
let titleNode = document.createTextNode("OGMMGMMMASMDAMSD");
h1Title.appendChild(titleNode);
let Pdesc = document.createElement("p");
let descNode = document.createTextNode("Uma historia de puro teste de javascript onde eu nãos estou com muita paciencia para ficar criando um contexto que faça um sentido literario");
Pdesc.className="desc";
Pdesc.appendChild(descNode);
aImg.appendChild(picture);
aInfo.appendChild(h1Title);
aInfo.appendChild(Pdesc);

divPicture.appendChild(aImg);
divInfo.appendChild(aInfo);

divBook.appendChild(divPicture);
divBook.appendChild(divInfo);

li.appendChild(divBook);
ul.appendChild(li);
}