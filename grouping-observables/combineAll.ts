import { timer, of } from "rxjs";
import { map, combineAll, take } from "rxjs/operators";

const source1 = timer(0, 100).pipe(map(m => 'A' + m), take(8));
const source2 = timer(0, 200).pipe(map(m => 'B' + m), take(3));

of(source1, source2).pipe(combineAll()).subscribe(
    (e) => console.log(e),
    (error) => console.log('error: ', error),
    () => console.log('completed')
);

setTimeout(() => {
    console.log('wont emit as second observable has no values')
    of(source1, of()).pipe(combineAll()).subscribe(
        (e) => console.log(e),
        (error) => console.log('error: ', error),
        () => console.log('completed')
    )
}, 2000);