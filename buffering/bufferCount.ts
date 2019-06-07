import { bufferCount } from 'rxjs/operators';
import { of } from 'rxjs';

console.log('Ouput 1#');
of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
    .pipe(bufferCount(3))
    .subscribe(d => console.log(d));
console.log('Ouput 1# end');


console.log('Ouput 2#');
of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
    .pipe(bufferCount(3, 2))
    .subscribe(d => console.log(d));

console.log('Ouput 2# end');