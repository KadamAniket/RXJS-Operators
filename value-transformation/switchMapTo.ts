import { Observable, of, interval } from "rxjs";
import { switchMapTo, take } from "rxjs/operators";

const source$ = Observable.create(observer => {
    observer.next('a');
    setTimeout(() => observer.next('b'), 200);
    setTimeout(() => observer.complete(), 300);
});

source$.pipe(
    switchMapTo(of(1, 2))
).subscribe(
    (e) => console.log('received: ' + e),
    (error) => console.log('error' + error.message),
    () => console.log('completed')
);

setTimeout(() => {
    console.log('\nInner observable values are lost when source emits new value\n')
    source$.pipe(
        switchMapTo(interval(50).pipe(take(10)))
    ).subscribe(
        (e) => console.log('received: ' + e),
        (error) => console.log('error' + error.message),
        () => console.log('completed')
    )
}, 1000);
