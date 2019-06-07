import { of, pipe } from "rxjs";
import { delay, repeatWhen, take, toArray, map, catchError } from "rxjs/operators";

const triger = pipe(delay(400), take(4));

of(1, 2, 3).pipe(repeatWhen(triger)).subscribe(
    (e) => console.log(e),
    (error) => console.log('error: ', error),
    () => console.log('completed')
)


// Handler error
setTimeout(() => {
    const erroTriger = of('a', 1).pipe(delay(200), map((m: any) => m.toLowerCase()), take(4), catchError(() => console.log('error in srouce')));

    of(1, 2, 3).pipe(repeatWhen(() => erroTriger)).subscribe(
        (e) => console.log(e),
        (error) => console.log('error: ', error),
        () => console.log('completed')
    )
}, 2000);

