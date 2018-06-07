// A partir du tableau 'items'
// Créer et insérer dans '#result', la liste des items via des '<li>'
var items = ['Sunglasses', 'Suit', 'Business card', 'Jet ski'];


var result = document.getElementById('resultExo1');

items.forEach(function(item) {
  var li = document.createElement('li');
  li.textContent = item;

  result.appendChild(li);
});
