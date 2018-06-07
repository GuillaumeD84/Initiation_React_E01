// Objectif : transformer le tableau de données 'datas' en :

// characters = [
//   {
//     name: firstname + lastname,
//     young: booléen en fonction de l'âge (true if < 50),
//   },
// ];

var datas = [
  {
    firstname: 'Marge',
    lastname: 'Simpson',
    gender: 'Women',
    age: 34,
  },
  {
    firstname: 'Ned',
    lastname: 'Flanders',
    age: 61,
  },
  {
    firstname: 'Charles Montgomery',
    lastname: 'Burns',
    age: 104,
  },
  {
    firstname: 'Waylon',
    lastname: 'Smithers',
    age: 36,
  },
];


// Solution 1 | Classique (version ES3)
var charactersES3 = datas.map(function(data) {
  return {
    name: data.firstname + ' ' + data.lastname,
    young: data.age < 50,
  };
});

console.log(charactersES3);

// Solution 2 | JavaScript plus moderne (ES2015 = ES6)
var charactersES6 = datas.map(data => ({
  name: `${data.firstname} ${data.lastname}`,
  young: data.age < 50
}));

console.log(charactersES6);



///////////////////////////////////////////////////////////////////
// Exemples ES3 vs ES6
console.log('\nExemples ES3 vs ES6');
// hello();
// ES3
function helloES3() {
  console.log('coucou');
}

helloES3();

// alternative
var helloES3bis = function() {
  console.log('coucou');
};

helloES3bis();


// ES6
var helloES6 = () => {console.log('coucou');};

helloES6();

// sum();
// ES3
var sumES3 = function(a, b) {
  return a + b;
};

console.log(sumES3(2, 3));


// ES6
var sumES6 = (a, b) => a + b;

console.log(sumES6(2, 3));
