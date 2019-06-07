import { interval, timer } from "rxjs";
import { take, audit, throttle } from "rxjs/operators";

interval(100).pipe(
    take(10),
    throttle(e => {
        console.log('current value', e);
        return timer(250);
    })
).subscribe(
    (e) => console.log(e),
    null,
    () => console.log('completed')
);
