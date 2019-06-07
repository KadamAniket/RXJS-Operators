import { interval } from "rxjs";
import { take, bufferWhen, tap } from "rxjs/operators";

let x = 0;

interval(500).pipe(
    take(10),
    tap(i => x = i),
    tap(y => console.log('y', y)),
    bufferWhen(() => {
        console.log('value x :', x);
        if (x < 5) {
            console.log('x:1000', x);
            return interval(1000);
        }
        console.log('x:500', x);
        return interval(500);
    })
).subscribe(value => console.log(value));