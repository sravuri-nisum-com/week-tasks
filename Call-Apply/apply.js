//Using apply to chain constructors
       Function.prototype.construct = function(aArgs) { 
            const oNew = Object.create(this.prototype);
           this.apply(oNew, aArgs);
           return oNew;
           };

     //  (or)

    //using closures
          Function.prototype.construct = function(aArgs) {
               const fConstructor = this;

            const fNewConstr = function() { 
             fConstructor.apply(this, aArgs); 
             };

             fNewConstr.prototype = fConstructor.prototype;
              return new fNewConstr();
    };
//usage
    function MyConstructor() {
     for (let nProp = 0; nProp < arguments.length; nProp++) {
       this[`property${nProp}`] = arguments[nProp];
     }
   }
   
   const myArray = [4, 'Hello world!', false];
   const myInstance = MyConstructor.construct(myArray);
   
   console.log(myInstance.property1);                // logs 'Hello world!'
   console.log(myInstance instanceof MyConstructor); // logs 'true'
   console.log(myInstance.constructor);              // logs 'MyConstructor'   i,e MyConstructor() 
     
/////Using apply and built-in functions /////////


const numbers = [5, 6, 2, 3, 7];

// using Math.min/Math.max apply
let max = Math.max.apply(null, numbers); 
// This about equal to Math.max(numbers[0], ...)
// or Math.max(5, 6, ...)

let min = Math.min.apply(null, numbers);

// vs. simple loop based algorithm
max = -Infinity, min = +Infinity;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i];
  }
  if (numbers[i] < min) {
    min = numbers[i];
  }
}

///////////

function minOfArray(arr) {
    let min = Infinity;
    const QUANTUM = 32768;
  
    for (let i = 0, len = arr.length; i < len; i += QUANTUM) {
      const submin = Math.min.apply(null, 
                                  arr.slice(i, Math.min(i+QUANTUM, len)));
      min = Math.min(submin, min);
    }
  
    return min;
  }
  
  const min = minOfArray([5, 6, 2, 3, 7]);
