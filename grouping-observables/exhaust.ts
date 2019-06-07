import { timer, of } from "rxjs";
import { map, take, exhaust, finalize, startWith, delay } from "rxjs/operators";

//TODO

// const source1 = timer(0, 100).pipe(map(m => 'A' + m), take(4), startWith(() => console.log('source 1 started')), finalize(() => console.log('source 1 completed')));
// // const source2 = timer(10, 100).pipe(map(m => 'B' + m), take(4));
// const source3 = timer(1000, 100).pipe(startWith(() => console.log('source 3 started')), map(m => 'C' + m), take(4));

const source1 = of(1, 2, 4).pipe(delay(100));
const source2 = of(5, 6).pipe(delay(50));
const source3 = of(7, 8, 9).pipe(delay(2000));

of(source1, source2, source3).pipe(exhaust()).subscribe(
    (e) => console.log(e),
    (error) => console.log('error: ', error),
    () => console.log('completed')
)