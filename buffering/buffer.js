"use strict";
exports.__esModule = true;
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
rxjs_1.interval(1000).pipe(operators_1.buffer(rxjs_1.interval(5000)), operators_1.take(4)).subscribe(function (d) { console.log(d); });
/* Output

[ 0, 1, 2, 3 ]
[ 4, 5, 6, 7, 8 ]
[ 9, 10, 11, 12, 13 ]
[ 14, 15, 16, 17, 18 ]

*/ 
