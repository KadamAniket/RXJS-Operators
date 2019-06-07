import { of, interval, timer } from "rxjs";
import { first, delay } from "rxjs/operators";

console.log('Finite stream')
of(1, 2, 3, 4, 5).pipe(first()).subscribe(
    (e) => console.log(e),
    null,
    () => console.log('completed')
);

console.log('Will also work for infinite stream')
timer(0, 1).pipe(first()).subscribe(
    (e) => console.log(e),
    null,
    () => console.log('completed')
);

setTimeout(() => {
    console.log('Finite stream with function')
    of(1, 2, 3, 4, 5).pipe(first(x => x % 2 === 0)).subscribe(
        (e) => console.log(e),
        null,
        () => console.log('completed')
    )
}, 100);

setTimeout(() => {
    console.log('No matching elements')
    of(1, 2, 3, 4, 5).pipe(first(x => x > 10)).subscribe(
        (e) => console.log(e),
        (error) => console.log('error: ', error),
        () => console.log('completed')
    )
}, 200);

setTimeout(() => {
    console.log('No elements')
    of().pipe(first()).subscribe(
        (e) => console.log(e),
        (error) => console.log('error: ', error),
        () => console.log('completed')
    )
}, 300);