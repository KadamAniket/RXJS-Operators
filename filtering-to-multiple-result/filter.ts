import { of } from "rxjs";
import { filter } from "rxjs/operators";

of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
    .pipe(filter(x => x % 2 === 0)).subscribe(
        (e) => console.log(e),
        null,
        () => console.log('completed')
    )