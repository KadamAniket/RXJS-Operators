import { of } from "rxjs";
import { skipWhile } from "rxjs/operators";

of(1, 2, 3, 4, 12, 3, 4, 5, 6, 8)
    .pipe(skipWhile(x => x < 4)).
    subscribe(x => console.log(x));