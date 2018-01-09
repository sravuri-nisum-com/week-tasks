// Using call to invoke a function and specifying the context for 'this'

function getName() { return this.name; }
getName();//"" without call()
// undefined
getName.call({name: 'Graham'});//with call() method
// 'Graham'

//////////////////////////////

// here when we call 'greet()' the value of 'this' will be bound to object 'obj'.
function greet() {
    var reply = [this.person, 'Is An Awesome', this.role].join(' ');//first parameter is 'this'.
    console.log(reply);
  }
  
  var obj = {
    person: ' Jim Watson ', role: 'Javascript Developer'
  };
  
  greet.call(obj);  // Jim Watson  Is An Aswesome Javascript Developer