import { interval, timer } from "rxjs";
import { take, sample, skip } from "rxjs/operators";

interval(100).pipe(
    sample(timer(0, 200)),
    take(5),
).subscribe(
    (e) => console.log(e),
    null,
    () => console.log('completed')
);
