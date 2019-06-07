import { interval, timer } from "rxjs";
import { windowCount, switchMap, toArray, take, tap } from "rxjs/operators";

timer(0, 100).pipe(tap((x) => console.log('value', x))).subscribe();

interval(100).pipe(
    windowCount(2),
    switchMap((w) => w.pipe(toArray())),
    take(4)
).subscribe(val => console.log(val));