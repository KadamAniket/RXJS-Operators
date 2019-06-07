import { Observable, interval } from "rxjs";
import { take, tap, switchMap } from "rxjs/operators";

const source$ = Observable.create(observer => {
    observer.next('a');
    setTimeout(() => observer.next('b'), 200);
    setTimeout(() => observer.next('c'), 300);
    setTimeout(() => observer.complete(), 300);
});

const number$ = interval(50).pipe(take(5));

source$.pipe(
    tap(x => console.log('value emitted from source: ' + x)),
    switchMap(() => number$)
).subscribe(
    (e) => console.log('received: ' + e),
    (error) => console.log('error' + error.message),
    () => console.log('completed')
);

setTimeout(() => {

    console.log('\nSend both values of source and inner observable\n')
    source$.pipe(
        tap(x => console.log('value emitted from source: ' + x)),
        switchMap(() => number$, (val1: string, val2) => `${val1.toUpperCase()}${val2}`)
    ).subscribe(
        (e) => console.log('received: ' + e),
        (error) => console.log('error' + error.message),
        () => console.log('completed')
    );

}, 1000)