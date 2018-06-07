// Créer les fonctions createSum et createMulti, qui permettent de créer des fonctions qui additionnent ou qui multiplient

// Ex :
//  var addTwo = createSum(2);
//  var double = createMulti(2);

// ES3
function createSum(number) {
  return function(number2) {
    return number + number2;
  };
}

var addTwo = createSum(2);

console.log(addTwo(5));



function createMulti(number) {
  return function(number2) {
    return number * number2;
  };
}

var double = createMulti(2);

console.log(double(8));



// ES6
// var createSumES6 = number => (number2 => (number + number2));
var createSumES6 = number => number2 => number + number2;

var addTwoES6 = createSumES6(2);

console.log(addTwoES6(5));


var createMultiES6 = number => number2 => number * number2;

var doubleES6 = createMultiES6(2);

console.log(doubleES6(8));
