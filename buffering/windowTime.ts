import { timer } from "rxjs";
import { take, windowTime, switchMap, toArray } from "rxjs/operators";

// starts after 300 millisecs and emit after every 100 millisecs
// take only takes 9 values and completes the observable
const source = timer(300, 100).pipe(take(9));

source.
    pipe(
        windowTime(200),
        switchMap(v => v.pipe(toArray()))
    ).subscribe(((v) => console.log(v)));

    /*
    
    []
[ 0 ]
[ 1, 2 ]
[ 3, 4 ]
[ 5, 6 ]
[ 7, 8 ]
    
    */