import { of } from "rxjs";
import { distinct } from "rxjs/operators";

of(1, 2, 3, 4, 1, 2, 4)
    .pipe(distinct()).subscribe(
        (e) => console.log(e),
        null,
        () => console.log('completed')
    )