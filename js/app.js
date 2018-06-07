const fruits = ['pomme', 'cerise', 'poire', 'abricot'];

// Je mange : "fruit"
// For
console.log('Boucle \'For\'');
for (let index = 0; index < fruits.length; index++) {
  console.log('Je mange : ' + fruits[index]);
}

// For..in
console.log('\nBoucle \'For..in\'');
for (let index in fruits) {
  console.log('Je mange : ' + fruits[index]);
}

// forEach
console.log('\nBoucle \'forEach\'');
fruits.forEach(function(fruit, index) {
  console.log('Je mange : ' + fruit + ' (index : ' + index + ')');
});

// forEach en passant une fonction
console.log('\nBoucle \'forEach\' en passant une fonction');
function mange(fruit) {
  console.log('Je mange : ' + fruit);
}

fruits.forEach(mange);


// Exemple d'utilisation de 'let'
// Dans cet exemple on mange tous les fruits au bout de 3 sec. Le hic c'est que lorsqu'on éxécute la fonction avec la console.log, la boucle for est terminée depuis un bail et donc index vaut 4 sauf qu'il n'y a pas d'index 4 dans 'fruits'.
console.log('\nTimeout avec \'var\'');
for (var index = 0; index < fruits.length; index++) {
  setTimeout(function() {
    console.log('Je mange : ' + fruits[index]);
  }, 3000);
}

// Avec 'let' on contourne ce problème
console.log('\nTimeout avec \'let\'');
for (let index = 0; index < fruits.length; index++) {
  setTimeout(function() {
    console.log('Je mange : ' + fruits[index]);
  }, 3000);
}


// On mange un fruit par seconde
console.log('\n1 fruit par seconde');
fruits.forEach(function(fruit, index) {
  setTimeout(function() {
    console.log('Je mange : ' + fruits[index]);
  }, index * 1000);
});


// Récupération des phrases dans un tableau
console.log('\nRécupération des phrases dans un tableau avec .map()');
var phrases = fruits.map(function(fruit) {
  return 'Je mange : ' + fruit;
});

console.log(phrases);
