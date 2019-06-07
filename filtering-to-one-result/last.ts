import { of, interval } from "rxjs";
import { last } from "rxjs/operators";

of(1, 2, 3, 4, 5).pipe(last()).subscribe(
    (e) => console.log(e),
    (error) => console.log('error: ', error),
    () => console.log('completed')
);

console.log('Last with func as param')
of(1, 2, 3, 4, 5).pipe(last(x => x % 2 === 0)).subscribe(
    (e) => console.log(e),
    (error) => console.log('error: ', error),
    () => console.log('completed')
);

console.log('Last with infinite stream will give no o/p')
interval(1).pipe(last()).subscribe(
    (e) => console.log(e),
    (error) => console.log('error: ', error),
    () => console.log('completed')
);