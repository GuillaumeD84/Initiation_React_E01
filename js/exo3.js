// Récupérer les 'box' de l'HTML qui sont actuellement en 'display: none;' et les afficher avec un interval de 1 seconde entre chaque

// Avec les méthodes classiques
// Retourne un HTMLCollection
var boxes = document.getElementsByClassName('box');
// Retourne un NodeList
var boxes2 = document.querySelectorAll('.box');

console.log(boxes);
console.log(boxes2);

// Attention ! Les méthodes contenues dans le __proto__ sont différentes !
// 'HTMLCollection' et plus limité que 'NodeList'
// Par exemple forEach() uniquement dispo pour 'NodeList'


// On utilise 'Array.from()' pour convertir en un tableau normal
// Qui lui possède toutes les méthodes dispo d'habitude, comme map() par ex

// Attention compatibilité limité (voir avec un polyfill) !
// Pas de souci avec Babel néanmoins
console.log(Array.from(boxes));

boxes2.forEach(function(box, index) {
  setTimeout(function() {
    box.style.display = 'block';
  }, index * 1000);
});
