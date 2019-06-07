import { interval, timer } from "rxjs";
import { take, audit } from "rxjs/operators";

interval(100).pipe(
    take(10),
    audit(e => {
        console.log('current value', e);
        return timer(300);
    })
).subscribe(
    (e) => console.log(e),
    null,
    () => console.log('completed')
);
