import { interval } from "rxjs";
import { tap, sampleTime, take } from "rxjs/operators";

interval(100).pipe(
    tap(x => console.log('emitted:' + x)),
    sampleTime(1000),
    take(3)
).subscribe(
    (e) => console.log('received: ' + e),
    (error) => console.log('error'),
    () => console.log('completed')
)