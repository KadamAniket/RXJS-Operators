import { interval } from "rxjs";
import { take } from "rxjs/operators";

interval(100).pipe(take(10)).subscribe(
    (e) => console.log(e),
    null,
    () => console.log('completed')
);
