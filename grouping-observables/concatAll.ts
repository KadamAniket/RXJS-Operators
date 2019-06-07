import { timer, of } from "rxjs";
import { map, take, concatAll, finalize, startWith } from "rxjs/operators";

const source1 = timer(0, 100).pipe(map(a => 'A' + a), take(4));
const source2 = timer(10, 100).pipe(map(a => 'B' + a), take(4));

of(source1, source2).pipe(concatAll()).subscribe(
    (e) => console.log(e),
    (error) => console.log('error: ', error),
    () => console.log('completed')
);