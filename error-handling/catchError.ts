import { throwError, of } from "rxjs";
import { catchError, tap, map } from "rxjs/operators";

throwError('some error occured')
    .pipe(
        tap(() => console.log('entry')),
        catchError(ex => {
            console.log('error caught');
            return throwError('error rethrown :' + ex)
        })
    ).subscribe(v => {
        if (v) {
            console.log('Valid Value', v);
        }
    }, error => console.log('error caught in subscribe', error),
        () => console.log('complete')
    );


throwError('some error occured')
    .pipe(
        tap(() => console.log('entry')),
        catchError(ex => {
            console.log('error caught');
            return throwError('error rethrown :' + ex)
        }),
        catchError(ex => {
            console.log('error re-caught');
            return of(undefined);
        })
    ).subscribe(v => {
        if (v) {
            console.log('Valid Value', v);
        }
    }, error => console.log('error caught in subscribe', error),
        () => console.log('complete')
    );


console.log('No exception thrown:')
// does not emit b since exception is thrown for 1

of('a', 1, 'b').pipe(
    map((v: any) => v.toLowerCase()),
    catchError(ex => {
        console.log('error caught');
        return of(undefined);
    })
).subscribe(v => {
    if (v) {
        console.log('Valid Value', v);
    }
}, error => console.log('error caught in subscribe', error),
    () => console.log('complete')
);

/*
No exception thrown:
Valid Value a
error caught
complete
*/