import { of } from "rxjs";
import { find } from "rxjs/operators";

of(1, 2, 3, 4, 5, 6).pipe(find(x => x === 3)).subscribe(
    (e) => console.log(e),
    (error) => console.log('error: ', error),
    () => console.log('completed')
);

console.log('Emits undefined as no element is founds')
of(1, 2, 3, 4, 5, 6).pipe(find(x => x === 31)).subscribe(
    (e) => console.log(e),
    (error) => console.log('error: ', error),
    () => console.log('completed')
);