import { of } from "rxjs";
import { tap, finalize } from "rxjs/operators";

console.log('Happy flow');
of(1, 2).pipe(tap((m) => console.log('item' + m)), finalize(() => console.log('finalize completed'))).subscribe(
    (e) => console.log(e),
    (error) => console.log('error: ', error),
    () => console.log('completed')
)

console.log('Error flow');
of('a', 1)
    .pipe(
        tap((m: string) => m.toLowerCase()),
        finalize(() => console.log('finalize completed'))
    )
    .subscribe(
        (e) => console.log(e),
        (error) => console.log('error'),
        () => console.log('completed')
    )