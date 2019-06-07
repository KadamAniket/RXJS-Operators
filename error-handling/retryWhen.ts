import { interval, timer } from "rxjs";
import { map, retryWhen, scan, tap, takeWhile, take } from "rxjs/operators";

let maskError = false;

interval(200)
    .pipe(
        map(x => {
            console.log('current value:' + x);
            if (x === 1) {
                throw 'error processing' + x
            }
            return x;
        }),
        retryWhen(errors => {
            if (maskError) {
                return errors.pipe(
                    tap(err => console.log('retryWhen log: ' + err)),
                    scan(acc => acc + 1, 0),
                    tap(retryCount => {
                        console.log('retry count:', retryCount);
                        if (retryCount === 2) {
                            console.log('swallowing error and completing')
                        } else {
                            console.log('retry whole source - retry #' + retryCount);
                        }
                    }),
                    takeWhile(errorCount => errorCount < 2) // will complete it when the condition becomes true
                )
            } else {
                return errors.pipe(
                    tap(err => console.log(err)),
                    scan(val => val + 1, 0),
                    tap(retryCount => {
                        if (retryCount === 2) {
                            console.log('Failing');
                            throw 'Ooops';
                        } else {
                            console.log('Retry whole source');
                        }
                    })
                )
            }
        })
    ).subscribe(
        (x) => console.log('success subscribed ' + x),
        (error) => console.log('subscribed error: ' + error),
        () => { console.log('completed successfully'); console.clear(); }
    );


// Just for Understanding purpose whether we can throw error from map operator

// timer(1000, 200).pipe(
//     map(x => { if (x === 5) { throw 'broken' } return x; }),
//     take(10)
// ).subscribe(
//     (x) => console.log('success subscribed ' + x),
//     (error) => console.log('subscribed error: ' + error),
//     () => console.log('completed errsuccessfully')
// );