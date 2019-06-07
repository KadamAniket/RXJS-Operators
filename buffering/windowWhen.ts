import { take, windowWhen, tap, switchMap, toArray } from "rxjs/operators";
import { timer } from "rxjs";

const source = timer(0, 100).pipe(take(9));
const notify = () => timer(200);

// emit buffer values after 200 ms

source.pipe(
    windowWhen(notify),
    tap(() => console.log('new buffer started')),
    switchMap(v => v.pipe(toArray()))
).subscribe(
    v => console.log(v)
);