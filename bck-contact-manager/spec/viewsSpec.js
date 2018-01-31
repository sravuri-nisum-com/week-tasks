describe("Tests for a custom Backbone single Contact View", function() {
  it("ContactManager.Views.Contact", function() {
  	expect(ContactManager.Views.Contact).toBeDefined();
  
  });
  var   contact, contactView;

  beforeEach(function() {
		contact = new ContactManager.Models.Contact({
      name:"sam",
      tel:"849-219-6965",
      email:"sr@gmail.com",
      avatar:"6.jpg"
    });

  	spyOn(ContactManager.Views.Contact.prototype,'render').and.callThrough();

    contactView = new ContactManager.Views.Contact({
      model: contact
    });
  });
  // it("render method to be called ", function() {
  //   	expect(contactView.render).toHaveBeenCalled();
  //   });
  it("test for events like 'click .delete-contact' click", function() {
  	expect(contactView.events['click .delete-contact']).toBeDefined();
  	expect(contactView.events['click .delete-contact']).toEqual('onClickDelete');
  });

  it("should have edit  buttons", function() {
    // expect(contactView.$el.find('a.delete-contact')).toBeDefined();
    expect(contactView.$el.find('a #edit')).toBeDefined();
  });
  it("should have delete buttons", function() {
    expect(contactView.$el.find('a.delete-contact')).toBeDefined();
    // expect(contactView.$el.find('a #edit')).toBeDefined();
  });

  // describe("Rendering", function() {

  //   it("returns the view object", function() {
  //     expect(this.contactView .render()).toEqual(this.contactView );
  //   });

  //   // it("produces the correct HTML", function() {
  //   //   this.contactView .render();
  //   //   expect(this.contactView .el.innerHTML)
  //   //     .toEqual('<a href="#todo/1"><h2>My Todo</h2></a>');
  //   // });

  // });

  

});

    
  

describe("Tests for a custom Backbone Contacts List View", function() {
    it("ContactManager.Views.Contacts", function() {
      expect(ContactManager.Views.Contacts).toBeDefined();
    
    });
    var   contact, contactsView ;
  
    beforeEach(function() {
      contact = new ContactManager.Models.Contact({
        name:"sam",
        tel:"849-219-6965",
        email:"sr@gmail.com",
        avatar:"6.jpg"
      });
  
      spyOn(ContactManager.Views.Contact.prototype,'render').and.callThrough();
  
      contactsView = new ContactManager.Views.Contact({
        model: contact
      });
    });
  
    it("should have contacts-container element", function() {
      expect(contactsView.$el.find('.contacts-container')).toBeDefined();
    });
});
describe("Tests for a custom Backbone ContactForm", function() {
  it("ContactManager.Views.ContactForm", function() {
    expect(ContactManager.Views.ContactForm).toBeDefined();
  
  });
  var   contact,contactFormView;

  beforeEach(function() {
    contact = new ContactManager.Models.Contact({
      name:"sam",
      tel:"849-219-6965",
      email:"sr@gmail.com",
      avatar:"6.jpg"
    });

    spyOn(ContactManager.Views.ContactForm.prototype,'render').and.callThrough();

    contactFormView = new ContactManager.Views.Contact({
      model: contact
    });
  });

  describe('contact-form instantiation ', function () {

    it('should create add contact container', function () {
        expect(contactFormView.$el.find('#cm-new-contact')).toBeDefined();
    });

    it('should populate the form fields with values from the model', function() {
       expect($('.contact-name-input').val()).toBe(contactFormView.model.get('sam'));
       expect($('.contact-email-input').val()).toBe(contactFormView.model.get('sr@gmail.com'));
       expect($('.contact-tel-input').val()).toBe(contactFormView.model.get('849-219-6965'));
      
    });
});

describe('saving values back to the model', function() {

    it('should save entered values back to our model', function() {
      contact = new ContactManager.Models.Contact({
        name:"sam",
        email:"sr@gmail.com",
        tel:"849-219-6965"
       
        // avatar:"6.jpg"
      });
        $('.contact-name-input').val(name);
        $('.contact-email-input').val(email);
        $('.contact-tel-input').val(tel);
        $('button').trigger('submit');

        expect(contactFormView.contact.get('sam')).toBe(name);
        expect(contactFormView.contact.get('sr@gmail.com')).toBe(email);
        expect(contactFormView.contact.get('849-219-6965')).toBe(tel);
    });
  });
});
// describe("Contact model view", function() {
    // beforeEach(function() {
    //   this.collection = new ContactManager.Collections.Contacts ();
    //   this.model = new ContactManager.Models.Contact({
    //     name:"sam",
    //     tel:"849-219-6965",
    //     email:"sr@gmail.com",
    //     avatar:"6.jpg"
    //   });
       
    //   this.view = new ContactManager.Views.Contact({collection: this.collection, model: this.model});
    //   spyOn(ContactManager.Views.Contact.prototype, 'render').and.callThrough();
    // });
    
    // describe("Instantiation", function() {
    //   it("should create a div element", function() {
    //     expect(this.view.el.tagName).toEqual("li");
    //   });
    // });
    
    // describe("Rendering", function() {
      
    //   it("returns the view object", function() {
    //     expect(this.view.render()).toEqual(this.view);
    //   });
      
    //   it("returns the view object in view edit mode", function() {
    //     this.view.model.enterEditState();
    //     expect(this.view.render()).toEqual(this.view);
    //     this.view.model.leaveEditState();            // so view is in "show" mode now
    //   });
      
    //   describe("Template for listing", function() {
    //     beforeEach(function() {
    //       //this.view.model._isStateEdit = false;
    //       this.view.render();
    //     });
        
    //     it("should have span4 element", function() {
    //       expect(this.view.$el.find('.span4')).toBeDefined();
    //     });
        
    //     it("should have edit and delete buttons", function() {
    //       expect(this.view.$el.find('button.edit-button')).toBeDefined();
    //       expect(this.view.$el.find('button.delete-button')).toBeDefined();
    //     });
    //   })
      
    //   describe("Template for editing", function() {
    //     beforeEach(function() {
    //       this.view.render();
    //     })
        
    //     // ovo nije nastavljano jer ne znam kako dobit renderiranje edit templatea
        
    //   });
      
    // });
    
    
    // describe("Events", function() {
    //   beforeEach(function() {
    //     this.view.model._isStateEdit = false;
    //     this.view.render();
    //   });
      
    //   it("should render edit form on edit button click", function() {
    //     console.log(this.view.$el)
  
    //     console.log(this.view.model.isInEditState());
    //     var $btn = this.view.$el.find('button.edit-button');
    //     expect($btn).toBeDefined();
    //     $btn.click();
        
    //     var $input = this.view.$el.find('input');
    //     expect($input).toBeDefined();
    //     expect($input.val()).toEqual(this.view.model.get('email'));
        
    //     expect(this.view.$el.find('button.btn-primary')).toBeDefined();
    //     expect(this.view.$el.find('button.btn-primary').text()).toEqual('Update User');
        
    //     expect(this.view.$el.find('button.cancel-button')).toBeDefined();
    //     expect(this.view.$el.find('button.cancel-button').text()).toEqual('Cancel');
    //   });
      
    //   it("should render edit form and not change user on cancel", function() {
    //     var $btn = this.view.$el.find('button.edit-button');
    //     $btn.click();
        
    //     var $input = this.view.$el.find('input');
    //     $input.val('Markan');
    //     //console.log($input.val());
    //     var $cancelBtn = this.view.$el.find('.cancel-button');
    //     expect($cancelBtn).toBeDefined();
    //     expect($cancelBtn.size()).toEqual(1);
        
    //     this.renderSpy = sinon.spy();
    //     this.view.model.bind('change', this.renderSpy);
        
    //     expect(this.view.model.isInEditState()).toBeTruthy();
  
    //     $cancelBtn.click();                         // this does not change view to show status
    //     this.view.model.leaveEditState();
    //     expect(this.renderSpy).toHaveBeenCalled();   // click event went to model and model triggered change on view
    //     expect(this.renderSpy).toHaveBeenCalledTwice();
  
    //     expect(this.view.model._isStateEdit).toEqual(false);
        
    //     //expect(this.view.model.isInEditState()).toEqual(false);
        
    //     this.view.render();
    //     console.log(this.view);  // zašto se ovdje ne prikazuje promijenjeni view (da ne sadrži input formu)
  
    //     //expect(this.view.$el.find('input').size()).toEqual(0);   // THIS SPEC FAILS
    //     // SPEC ABANDONED BECAUSE CLICK ON CANCEL BUTTON DOES NOT RE-RENDER THE VIEW
  
    //   });
      
    //   it("should render edit form and change a user on update", function() {
    //     console.log(this.view.$el)
    //     var $btn = this.view.$el.find('button.edit-button');
    //     //$btn.click();
    //     expect(this.view.model.isInEditState()).toBeTruthy();
        
    //   })
    // });
    
    
  //});
