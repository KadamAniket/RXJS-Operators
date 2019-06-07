import { of } from "rxjs";
import { concatMap, toArray, delay } from "rxjs/operators";

of(1, 2, 3, 4, 5).pipe(
    concatMap(x => [x, x * 2]),
).subscribe(
    (e) => console.log('received: ' + e),
    (error) => console.log('error'),
    () => console.log('completed')
)

setTimeout(() => {
    console.log('\n\n');
    of(10, 1500, 1000, 200).pipe(
        concatMap(val => of(`value emitted for this ${val}delay`).pipe(delay(val)))
    ).subscribe((e) => console.log('received: ' + e),
        (error) => console.log('error'),
        () => console.log('completed'))

}, 1000);