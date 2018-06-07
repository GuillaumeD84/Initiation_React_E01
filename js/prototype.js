Array.prototype.hello = function() {
  console.log('Hello, je suis un tableau et je contiens ' + this.length + ' éléments !');
};

// Hello, je suis un tableau et je contiens 3 éléments !
[0, 1, 2].hello();
