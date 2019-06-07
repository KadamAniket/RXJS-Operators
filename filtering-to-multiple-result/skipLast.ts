import { of } from "rxjs";
import { skipLast } from "rxjs/operators";

of(1, 2, 3, 4, 5, 6)
    .pipe(skipLast(3))
    .subscribe(e => console.log(e))