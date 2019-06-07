import { of } from "rxjs";
import { ignoreElements, map, tap } from "rxjs/operators";

of(1, 2, 3, 4, 5).pipe(ignoreElements()).subscribe(
    (e) => console.log(e),
    (error) => console.log('error: ', error),
    () => console.log('completed')
)

// Handle Error
of('a', 1).pipe(tap((m: string) => m.toLowerCase()), ignoreElements()).subscribe(
    (e) => console.log(e),
    (error) => console.log('error: ', error),
    () => console.log('completed')
)