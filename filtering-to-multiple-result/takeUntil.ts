import { interval, timer } from "rxjs";
import { takeUntil } from "rxjs/operators";

interval(100).pipe(takeUntil(timer(500))).subscribe(
    (e) => console.log(e),
    null,
    () => console.log('completed')
)