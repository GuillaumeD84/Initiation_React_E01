/* La famille Dunphy prévoit une sortie en boite.
 * Seul problème, pour rentrer il faut :
 *  - Avoir au moins 18 ans
 *  - Avoir au moins 20$ en poche
 *  - Si < 18 ans, on peut corrompre le vendeur avec 500$
 *
 * Créer un array admittedUsers à partir de l'array users
 * contenant les membres de la famille pouvant entrer
*/

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
var admittedUsers = [];

users.forEach(function(user) {
  if (
    user.age >= 18 && user.cash >= 20
    ||
    user.cash >= 500
  ) {
    admittedUsers.push(user);
  }
});

console.log(admittedUsers);


// ES6
var admittedUsersES6 = [];

admittedUsersES6 = users.filter(
  user => user.age >= 18 && user.cash >= 20 || user.cash >= 500
);

console.log(admittedUsersES6);
