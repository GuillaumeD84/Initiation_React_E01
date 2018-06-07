// Utiliser 'reduce()' pour savoir combien d'argent possède la famille Dunphy

// Exemple de reduce()
// var cumulInitialValue = 0;
//
// var result = [0, 1, 2, 5, 1].reduce(function(cumul, item) {
//   return cumul + item;
// }, cumulInitialValue);
//
// console.log(result); // = 9



var users = [
  {
    name: 'Claire',
    age: 34,
    cash: 2250,
  },
  {
    name: 'Phil',
    age: 35,
    cash: 1005,
  },
  {
    name: 'Haley',
    age: 18,
    cash: 10,
  },
  {
    name: 'Luke',
    age: 15,
    cash: 0,
  },
  {
    name: 'Alex',
    age: 16,
    cash: 400,
  },
  {
    name: 'Manny',
    age: 14,
    cash: 777,
  },
  {
    name: 'Lily',
    age: 5,
    cash: 5,
  },
];

// ES3
var totalCash = users.reduce(function(cumul, user) {
  return cumul + user.cash;
}, 0);

console.log(totalCash);


// ES6
var totalCashES6 = users.reduce((cumul, user) => cumul + user.cash, 0);

console.log(totalCashES6);
