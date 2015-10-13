
describe('1, gobj function return', function () {

    it('if it is null', function () {

        expect(gObj("Dea23")).toEqual(null);

    });
});

describe('2, if show message', function () {

    it('if the message is shown', function () {

    expect(showquickobjmsg("the first number need to be numeric", true, A).toContain("number"));

    });

});

describe('3, test calcfibonacci output', function () {

    it('if the calculation of the fibonacci is done', function () {

        expect(calcfibonacci('htmlelement')).toContain(' all numbers');
    });

});

describe('4, test if fibonacci function is working', function () {
    it('return string', function ()
    {
        expect(finci(2, 10)).toEqual(143);
    });

});

describe('5, test calcarithmetic output', function () {

    it('if the calculation of the arithmetic is done', function () {

        expect(calcarithmetic('htmlelement')).toContain('the sum of all numbers until the');
    });

});

describe('6, test if arithmetic is working', function () {

    it('if the result is correct', function () {
        expect(arthi(2,5,20)).toEqual(990);
    });
});

describe('7, test calcgeometric output', function () {

    it('if the calculation of the geometric sequence is done', function () {

        expect(calcgeometric('htmlelement')).toContain('geometric');
    });

});

describe('8, test if geometric function is working', function () {
    it('if return correct reult', function () {

        expect(geom(12, 12)).toEqual(122070312);

    });
});

describe('9, test controller', function () {

    var $controller;

    beforeEach(function () { //before load module into jasmine

        module('numberApp');//load module

        inject(function ($_controller) {

            $controller = $_controller; //inject controller into jasmine

        });

    });

    it('now test controller1', function () {

        var $scope = {};

        var controller = $controller('calculatemodule1', { $scope: $scope });

        expect($scope.testtext1).toContain('see me works');

    });

    it('now test controller2', function () {

        var $scope = {};

        var controller = $controller('calculatemodule2', { $scope: $scope });

        expect($scope.testtext2).toContain('see me works');

    });

    it('now test controller3', function () {

        var $scope = {};

        var controller = $controller('calculatemodule3', { $scope: $scope });

        expect($scope.testtext3).toContain('see me works');

    });

});


