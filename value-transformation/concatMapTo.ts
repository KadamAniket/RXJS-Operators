import { interval, of } from "rxjs";
import { concatMapTo, take } from "rxjs/operators";

interval(1000).pipe(
    take(3),
    concatMapTo(of(1, 2, 3))
).subscribe(
    (e) => console.log('received: ' + e),
    (error) => console.log('error'),
    () => console.log('completed')
)