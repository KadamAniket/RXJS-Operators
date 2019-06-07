import { timer, interval } from "rxjs";
import { tap, debounce, take } from "rxjs/operators";

timer(0, 1000).pipe(
    tap(x => console.log(`Source: ${x} at ${x * 1000}ms`)),
    debounce(x => {
        let time = 900;
        let totalTime = x * 1000 + 900;
        if (x === 1) {
            time = 1500;
        }
        return interval(time).pipe(tap(() => console.log(`Interval${x} emits at ${totalTime}ms`)));
    })
)
    .pipe(take(3))
    .subscribe(
        (e) => console.log('received: ' + e),
        (error) => console.log('error'),
        () => console.log('completed')
    )