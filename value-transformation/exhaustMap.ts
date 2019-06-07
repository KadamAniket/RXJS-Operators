import { of } from "rxjs";
import { exhaustMap, delay } from "rxjs/operators";

of('a', 'b', 'blocker', 'c').pipe(
    exhaustMap(x => {
        switch (x) {
            case 'a':
                return x.toUpperCase();

            case 'b':
                return of(1, 2, 3, 4);

            case 'blocker':
                return of(x).pipe(delay(10));

            default:
                return x;
        }
    })
).subscribe(
    (e) => console.log('received: ' + e),
    (error) => console.log('error' + error.message),
    () => console.log('completed')
)