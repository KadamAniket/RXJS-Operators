// RxJS v6+
import { from, merge } from 'rxjs';
import { partition, map } from 'rxjs/operators';

const source = from([1, 2, 3, 4, 5, 6]);

const [evens, odds] = partition((val: any) => val % 2 === 0)(source)

const subscribe = merge(
    evens.pipe(map(val => `Even: ${val}`)),
    odds.pipe(map(val => `Odd: ${val}`))
).subscribe(val => console.log(val));