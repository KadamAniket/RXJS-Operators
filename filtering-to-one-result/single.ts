import { of } from "rxjs";
import { single } from "rxjs/operators";

of(1, 2, 3, 4, 5, 6).pipe(single(x => x === 5)).subscribe(
    (e) => console.log(e),
    (error) => console.log('error: ', error),
    () => console.log('completed')
);

console.log('emits undefined when no value matches predicate')
of(1, 2, 3, 4, 5, 6).pipe(single(x => x === 51)).subscribe(
    (e) => console.log(e),
    (error) => console.log('error: ', error),
    () => console.log('completed')
);

console.log('emits error when more than 1 value matches predicate')
of(1, 2, 3, 4, 5, 6).pipe(single(x => x % 2 === 0)).subscribe(
    (e) => console.log(e),
    (error) => console.log('error: ', error),
    () => console.log('completed')
);