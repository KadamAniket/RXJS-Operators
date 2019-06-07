import { of } from "rxjs";
import { distinctUntilChanged } from "rxjs/operators";

of(1, 2, 2, 3, 5, 5, 6, 7, 8, 9, 1, 5, 7).pipe(
    distinctUntilChanged()
).subscribe(
    (e) => console.log(e),
    null,
    () => console.log('completed')
)