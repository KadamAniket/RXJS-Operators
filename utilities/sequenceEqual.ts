import { interval, of } from "rxjs";
import { take, sequenceEqual } from "rxjs/operators";

const source1 = interval(100).pipe(take(4));
const source2 = interval(100).pipe(take(4));

source1.pipe(sequenceEqual(source2)).subscribe((e) => console.log('received: ' + e),
    (error) => console.log('error' + error.message),
    () => console.log('completed'));

const source3 = interval(150).pipe(take(4));
source1.pipe(sequenceEqual(source3)).subscribe((e) => console.log('time delay received: ' + e),
    (error) => console.log('error' + error.message),
    () => console.log('completed'));

const source4 = interval(100).pipe(take(3));
source1.pipe(sequenceEqual(source4)).subscribe((e) => console.log('diff length received: ' + e),
    (error) => console.log('error' + error.message),
    () => console.log('completed'));

const source5 = of(1, 0, 2, 3);
source1.pipe(sequenceEqual(source5)).subscribe((e) => console.log('diff order received: ' + e),
    (error) => console.log('error' + error.message),
    () => console.log('completed'));