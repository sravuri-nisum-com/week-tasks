var UserModel = Backbone.Model.extend({
    
      defaults: {//defining default values
        firstName: '',
        lastName: '',
        birthDate: '',
        formatedDate: '',
        fullName: ''
      },
    
      initialize: function () {//initializing functions
        this.setFullName();
        this.setDate();
      },
    
      setFullName: function () { //seeting full name 
        this.set('fullName', this.get('firstName') + ' ' + this.get('lastName'));
      },
    
      setDate: function () {//setting date in new format
        this.set('formatedDate', this.get('birthDate').split('-').reverse().join('/'));
      }
    });
    
    var user = new UserModel({
      firstName: 'Bruce',
      lastName: 'Wayne',
      birthDate: '1980-02-19'
    });
    
    user.get('fullname');
    // console.log(user.get('fullname')); // "Bruce Wayne"
    user.get('formatedDate'); // "19/02/1980"