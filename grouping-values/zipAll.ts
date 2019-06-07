import { take, map, zipAll } from "rxjs/operators";
import { timer } from "rxjs/internal/observable/timer";
import { of } from "rxjs";

const source1 = timer(100, 100).pipe(map(m => 'A' + m), take(4));
const source2 = timer(200, 100).pipe(map(m => 'B' + m), take(4));
const source3 = timer(5000, 100).pipe(map(m => 'C' + m), take(4));

of(source1, source2, source3).pipe(zipAll()).subscribe(
    (e) => console.log(e),
    (error) => console.log('error: ', error),
    () => console.log('completed')
);