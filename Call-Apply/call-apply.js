
// using call() method 
function sum() {
    function add (a, b) { return a + b; }
    return [].reduce.call(arguments, add);
  }
  sum(1, 2, 3, 4, 5) ;//15
  sum(10,20,30);//60


  //same above function for array as function argument  using apply() method 
  var arr = [1, 3, 5, 7, 9, 11, 13, 15];
  //sum();

  add.apply(null, arr);
  // 64
/*in above apply () , The first parameter is for the receiver. This time, it’s null as we don’t need it. The second parameter is an array(or array-like) object 
 which should have indexed properties and the length property.*/