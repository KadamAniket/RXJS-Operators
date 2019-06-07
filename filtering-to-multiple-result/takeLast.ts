import { of } from "rxjs";
import { takeLast } from "rxjs/operators";

// Emit last 3 values
of(1, 2, 3, 4, 5, 6, 7, 8).pipe(takeLast(3)).subscribe(
    (e) => console.log(e),
    null,
    () => console.log('completed')
)

console.log('Will emit 3 values even when takeLast 5 values is expected')
of(1, 2, 3).pipe(takeLast(5)).subscribe(
    (e) => console.log(e),
    null,
    () => console.log('completed')
)

// WIll never emit values for infinite streamssss