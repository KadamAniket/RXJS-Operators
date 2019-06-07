import { timer } from "rxjs";
import { windowToggle, switchMap, toArray, take } from "rxjs/operators";

// starts timer after 0 millisec and emits every 500 millisec
const opening = timer(0, 500);
// factory function which emits every 200 millisec
const closing = () => timer(200);

// will ignore the values between 200 and 500

timer(0, 100).pipe(
    take(36),
    windowToggle(opening, closing),
    switchMap(m => m.pipe(toArray()))
).subscribe(val => console.log(val));