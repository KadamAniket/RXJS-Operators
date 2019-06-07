import { of, pipe } from "rxjs";
import { reduce } from "rxjs/operators";

of(1, 2, 3, 4).pipe(
    reduce((acc, val) => acc + val, 0)
).subscribe(
    (e) => console.log('received: ' + e),
    (error) => console.log('error' + error.message),
    () => console.log('completed')
);