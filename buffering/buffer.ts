import { interval } from 'rxjs';
import { buffer, take } from 'rxjs/operators';

interval(1000).pipe(
    buffer(interval(5000)),
    take(4)
).subscribe(d => { console.log(d) });

/* Output

[ 0, 1, 2, 3 ]
[ 4, 5, 6, 7, 8 ]
[ 9, 10, 11, 12, 13 ]
[ 14, 15, 16, 17, 18 ]

*/