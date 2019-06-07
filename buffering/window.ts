import { interval } from "rxjs";
import { window, take, switchMap, toArray } from 'rxjs/operators';

interval(100).pipe(
    window(interval(200)),
    switchMap(p => p.pipe(toArray())),
    take(3)
).subscribe(val => console.log(val));