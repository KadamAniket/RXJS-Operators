import { Observable } from "rxjs";
import { timeout } from "rxjs/operators";

const source = Observable.create(observer => {
    observer.next('A'),
        setTimeout(() => observer.next('B'), 100), // 100 millisec gap between A and B
        setTimeout(() => observer.next('C'), 300), // 200 millisec gap between B and C
        setTimeout(() => observer.complete(), 600) // 300 millisec gap between C and D
});

// // All values will be emmitted since time gap is less than 350
// source
//     .pipe(
//         timeout(350)
//     )
//     .subscribe(
//         (x) => console.log('subscription success: ', x),
//         (x) => console.log('subscription error: ', x),
//         () => console.log('subscription complete ')
//     )



// // Only first 2 values will be emmitted since time gap is less than 150
// source
//     .pipe(
//         timeout(150)
//     )
//     .subscribe(
//         (x) => console.log('subscription success: ', x),
//         (x) => console.log('subscription error: ', x),
//         () => console.log('subscription complete ')
//     )

// Only first 3 values will be emmitted since time gap is less than 150
source
    .pipe(
        timeout(new Date(Date.now() + 500))
    )
    .subscribe(
        (x) => console.log('subscription success: ', x),
        (x) => console.log('subscription error: ', x),
        () => console.log('subscription complete ')
    )