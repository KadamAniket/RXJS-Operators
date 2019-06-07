import { interval, observable, Observable, of } from "rxjs";
import { tap, take, timeoutWith } from "rxjs/operators";


// Unable to set the timer interval dynamic
// let timer = 100;

// interval(timer).pipe(
//     tap(() => { timer = timer + 100 }),
//     tap(() => console.log('timer:', timer)),
//     take(10)
// ).subscribe(
//     v => console.log(v),
//     err => console.log('Error', err),
//     () => console.log('complete')
// );

const backup = of('1', '2', '3');
const source = Observable.create(observer => {
    observer.next('A'),
        setTimeout(() => observer.next('B'), 100),
        setTimeout(() => observer.next('C'), 300),
        setTimeout(() => observer.complete(), 600)
});

source.pipe(
    timeoutWith(200, backup)
).subscribe(
    v => console.log(v),
    err => console.log('Error', err),
    () => console.log('complete')
);