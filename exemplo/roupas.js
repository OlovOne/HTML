var bd = [
  { image: "b1.webp", name: "Bolsa 1", description: "Descrição da Bolsa 1.", price: "R$250.00" },
  { image: "b2.webp", name: "Bolsa 2", description: "Descrição da Bolsa 2.", price: "R$465.00" },
  { image: "b3.webp", name: "Bolsa 3", description: "Descrição da Bolsa 3.", price: "R$345.00" }
];

var container = document.getElementById('lojaContainer');

function renderImages(items) {
  container.innerHTML = '';

  items.forEach(function(item) {
    var itemDiv = document.createElement('div');
    itemDiv.className = 'loja-item';

    var image = document.createElement('img');
    image.className = 'item-image';
    image.src = item.image;
    image.alt = item.name;
    itemDiv.appendChild(image);

    var descriptionDiv = document.createElement('div');
    descriptionDiv.className = 'item-description';

    var name = document.createElement('h3');
    name.textContent = item.name;
    descriptionDiv.appendChild(name);

    var description = document.createElement('p');
    description.textContent = item.description;
    descriptionDiv.appendChild(description);

    itemDiv.appendChild(descriptionDiv);

    var price = document.createElement('div');
    price.className = 'item-price';
    price.textContent = item.price;
    itemDiv.appendChild(price);

    container.appendChild(itemDiv);
  });
}

function searchItems() {
  var searchTerm = document.getElementById('searchInput').value.toLowerCase();
  var filteredItems = [];

  if (searchTerm) {// se buscamos algo
    filteredItems = bd.filter(function(item) {
      var itemName = item.name.toLowerCase();
      var itemDescription = item.description.toLowerCase();
      return itemName.includes(searchTerm) || itemDescription.includes(searchTerm);
    });
  } else {
    filteredItems = bd;
  }

  renderImages(filteredItems);
}

document.getElementById('searchButton').addEventListener('click', searchItems);

window.addEventListener('load', function() {
  renderImages(bd);
});
