describe('Adlist', function () {
     var adlist;
    beforeEach(function () {
        adlist = new Adlist(); //before init object
    });

    describe('describe if array return expect value', function () { //test
        it('A return A desc', function () //event tessst
        {
            expect(adlist.returnalllist()['A']).toEqual('A letter assigns one word');
        });
       
        it('E return A desc', function () //event tessst
        {
            expect(adlist.returnalllist()['E']).toEqual('E letter assigns one word');
        });

       


    });
})

describe('user login form', function () {

    beforeEach(angular.mock.module("agrApp"));
    // critical
    it('ensure invalid email addresses are caught', function () {
          expect(agrApp.LoginCtrl).tobeDefined();    
    });
    
       
    
    it('ensure valid email addresses pass validation', function () { });
    it('ensure submitting form changes path', function () { });

    // nice-to-haves
    it('ensure client-side helper shown for empty fields', function () { });
    it('ensure hitting enter on password field submits form', function () { });

});

