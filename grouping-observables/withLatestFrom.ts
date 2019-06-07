import { timer } from "rxjs";
import { map, take, withLatestFrom } from "rxjs/operators";

const source = timer(0, 500).pipe(map(i => 'Source ' + i), take(4));
const internal1 = timer(100, 100).pipe(map(i => 'Internal1 ' + i), take(10));
const internal2 = timer(150, 200).pipe(map(i => 'Internal1 ' + i), take(10));

source.pipe(withLatestFrom(internal1, internal2)).subscribe(
    (e) => console.log(e),
    (error) => console.log('error: ', error),
    () => console.log('completed')
)
