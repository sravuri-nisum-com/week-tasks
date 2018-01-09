function multiplier ( factor ) {

    return function ( number ) {

       return number * factor ;

    };

}

let twice = multiplier (2) ;

console . log ( twice (5) ) ; // 10
// in the above example the inner function can access the parameter factor of the outer function. 
// It means it remembers the environment in which the inner function was created.

// The behaviour of the closures frees you from having to worry about the lifetimes of 
// variables and also allows for the creative use of function values.

// One the major drawback of using closures is that, it consumes more memory and 
// if not used properly can lead to ‘memory leaks’. explained for bellow example 
function parent() {

   let num = 5;

   function child() {

       return num;

   }

   return child;

}

let result = parent();

console.log(result()); // 5

//here in above example When the function parent is called, the local variable num is created and is assigned a value.
// The parent function returns the function named child.

// the local variable num of the outer function(parent) 
// exists even after the outer function has returned, as the inner function child holds the reference to 
// the outer function variable num, so the variable num will not be garbage collected. Whereas in regular functions, 
// when the function returns, its local variables no longer exists.

// In such case, we need to release the memory explicitly by assigning null to the variables.

// result = null;
