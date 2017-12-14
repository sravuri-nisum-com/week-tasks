function MyObject(name, message) {
    
         this.name = name.toString();
    
         this.message = message.toString();
    
    }
    
    MyObject.prototype.getName = function() {
    
         return this.name;
    
    };
    
    MyObject.prototype.getMessage = function() {
    
         return this.message;
    
    };
    // ƒ () {
    
    //      return this.message;
    
    // }
    function MyObject(name, message) {
    
            this.name = name.toString();
    
            this.message = message.toString();
    
    }
    
    MyObject.prototype = {
    
           getName: function() {
    
               return this.name;
    
           },
    
          getMessage: function() {
    
               return this.message;
    
          }
    
    }
    //fdjjhksfhkjgjkwksj
    function MyObject(name, message) {
    
         this.name = name.toString();
    
         this.message = message.toString();
    
         this.getName = function() {
    
               return this.name;
    
         };
    
         this.getMessage = function() {
    
              return this.message;
    
         };
        }    