//suppose that we had an array-like object. It means it has indexed properties and a length property as well.
// I might want to use the forEach method of Array, 
//but I can’t do that because it’s not an array and doesn’t have the array prototype.
var arraylike = {0: 'Hello', 1: 'World', 2: 'Bye', length: 3};
arraylike.forEach(console.log);
// error: Uncaught TypeError: arraylike.forEach is not a function at <anonymous>:2:11


// With the call method of the function, we can achieve it.
Array.prototype.forEach.call(arraylike, console.log);//here The first parameter of the call method is a receiver.
// Other parameters would be the parameters of the original function
//    (or )
[].forEach.call(arraylike, console.log); 





//Using call to chain constructors for an object

function Product(name, price) {
    this.name = name;
    this.price = price;
  }
  
  function Food(name, price) {
    Product.call(this, name, price);
    this.category = 'food';
  }
  
  function Toy(name, price) {
    Product.call(this, name, price);
    this.category = 'toy';
  }
  
  const cheese = new Food('feta', 5);
  const fun = new Toy('robot', 40);



// Using call to invoke an anonymous function

const animals = [
    { species: 'Lion', name: 'King' },
    { species: 'Whale', name: 'Fail' }
  ];
  
  for (let i = 0; i < animals.length; i++) {
    (function(i) {
      this.print = function() {
        console.log(`#${i} ${this.species}: ${this.name}`);
      }
      this.print();
    }).call(animals[i], i);
  }




/// Using call to invoke a function and without specifying the first argument
  var sData = 'call/apply data';
  
function display(){
console.log('sData value is %s ', this.sData);
}

display.call();  // sData value is call/apply data






