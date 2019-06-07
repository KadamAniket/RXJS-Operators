import { of } from "rxjs";
import { takeWhile } from "rxjs/operators";

of(1, 2, 3, 4, 5, 12, 2, 34, 5, 6)
    .pipe(takeWhile(x => x < 5)).subscribe(
        (e) => console.log(e),
        null,
        () => console.log('completed')
    )