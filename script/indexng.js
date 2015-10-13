angular.module('numberApp', []);

var NumApp = angular.module('numberApp');

NumApp.controller('calculatemodule1', ['$scope', function ($scope) {

    $scope.cal1event = function () {

        return calcarithmetic('coutputarithmetic');
    };

    $scope.clear1event = function () {
        setTimeout(function () { window.location.href = "";},100);
    }

    $scope.testtext1 = "see me works";

}]);

NumApp.controller('calculatemodule2', ['$scope', function ($scope) {

    $scope.cal2event = function () {

        return calcgeometric('coutputgeometric');
    };

    $scope.clear2event = function () {
        setTimeout(function () { window.location.href = ""; }, 100);
    }

    $scope.testtext2 = "see me works";


}]);

NumApp.controller('calculatemodule3', ['$scope', function ($scope) {

    $scope.cal3event = function () {

        return calcfibonacci('coutputfibonacci');
    };

    $scope.clear3event = function () {

        setTimeout(function () { window.location.href = ""; }, 100);
    }

    $scope.testtext3 = "see me works";


}]);

function showquickobjmsg(A, B, C) {
    if (B)
    {
        A = "<font color=red>" + A + "</font>"
    }
    gObj(C).innerHTML = A
}

function gObj(obj) {
    var theObj;
    if (document.all) {
        if (typeof obj == "string") {
            return document.all(obj);
        } else {
            return obj.style;
        }
    }
    if (document.getElementById) {
        if (typeof obj == "string") {
            return document.getElementById(obj);
        } else {
            return obj.style;
        }
    }
    return null;
}

function finci( Wj, wn) {

    lM = 1;
    mS = 1;
    IR = 0;
    kr = 2;

    if (wn == 1)
    {
        IR = 1;
        kr = 1
    }
    else
    {
        if (wn == 2) {
            IR = 1;
            kr = 2
        }
        else
        {
            for (Wj = 3; Wj <= wn; Wj++) {
                IR = lM + mS;
                kr += IR;
                lM = mS;
                mS = IR
            }
        }
    }

    mv = "sequence: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...";
    mv += "<br>" + wn + "<sup>th</sup> value: <font color=green><b>" + IR + "</b></font>";
    mv += "<br>the sum of all numbers until the " + wn + "<sup>th</sup>: <font color=green><b>" + kr + "</b></font>";

    return kr;
}

function arthi(nv, gj, Wj) {

    mv = "sequence: " + nv + ", ";

    for (Wj = 2; Wj < 10; Wj++)
    {

        Hi = nv * Math.pow(gJ, (Wj - 1));

        mv += Hi + ", "
    }

    IR = nv * Math.pow(gJ, (bQ - 1));

    kr = 0;

    if (gJ == 1)
    {
        kr = nv * bQ
    }
    else
    {
        kr = nv * (Math.pow(gJ, (bQ)) - 1) / (gJ - 1)
    }

    mv += " ...<br>" + bQ + "<sup>th</sup> value: <font color=green><b>" + IR + "</b></font>";

    mv += "<br>the sum of all numbers until the " + bQ + "<sup>th</sup>: <font color=green><b>" + kr + "</b></font>";

    if ((gJ < 1) && (gJ > -1))
    {
        mv += "<br>the sum of this infinite geometric series: <font color=green><b>" + (nv / (1 - gJ)) + "</b></font>"
    }

    return kr;
}

function geom(nv, Wj) {

    mv = "sequence: " + nv + ", ";
    for (Wj = 2; Wj < 10; Wj++) {
        Hi = nv * Math.pow(gJ, (Wj - 1));
        mv += Hi + ", "
    }
    IR = nv * Math.pow(gJ, (bQ - 1));
    kr = 0;
    if (gJ == 1) {
        kr = nv * bQ
    } else {
        kr = nv * (Math.pow(gJ, (bQ)) - 1) / (gJ - 1)
    }
    mv += " ...<br>" + bQ + "<sup>th</sup> value: <font color=green><b>" + IR + "</b></font>";
    mv += "<br>the sum of all numbers until the " + bQ + "<sup>th</sup>: <font color=green><b>" + kr + "</b></font>";
    if ((gJ < 1) && (gJ > -1)) {
        mv += "<br>the sum of this infinite geometric series: <font color=green><b>" + (nv / (1 - gJ)) + "</b></font>"
    }


    return kr;
}
