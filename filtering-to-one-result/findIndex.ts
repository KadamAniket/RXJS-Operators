import { of } from "rxjs";
import { findIndex } from "rxjs/operators";

of(1, 2, 3, 4, 5, 6).pipe(findIndex(x => x === 3)).subscribe(
    (e) => console.log(e),
    (error) => console.log('error: ', error),
    () => console.log('completed')
);

console.log('Emits -1 as no element is found')
of(1, 2, 3, 4, 5, 6).pipe(findIndex(x => x === 31)).subscribe(
    (e) => console.log(e),
    (error) => console.log('error: ', error),
    () => console.log('completed')
);