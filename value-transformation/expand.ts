import { of, interval, empty } from "rxjs";
import { expand, take } from "rxjs/operators";

// Receives values from both
interval(100).pipe(
    take(5),
    expand(x => x < 10 ? of('calculate value:' + (x + 1)) : of())
).subscribe(
    (e) => console.log('received: ' + e),
    (error) => console.log('error' + error.message),
    () => console.log('completed')
)

setTimeout(() => {
    console.log('\n Single Value emission');
    of(1).pipe(
        expand(x => (x < 10 ? of(x + 1) : empty()))
    ).subscribe(
        (e) => console.log('received: ' + e),
        (error) => console.log('error' + error.message),
        () => console.log('completed')
    )
}, 1000)