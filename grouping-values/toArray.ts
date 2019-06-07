import { of } from "rxjs";
import { toArray } from "rxjs/operators";

of(1, 2, 3, 45, 6, 7, 8).pipe(toArray()).subscribe(
    (e) => console.log(e),
    (error) => console.log('error: ', error),
    () => console.log('completed')
)