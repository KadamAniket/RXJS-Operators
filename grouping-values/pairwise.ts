import { timer } from "rxjs";
import { pairwise, take } from "rxjs/operators";

timer(0, 100).pipe(pairwise(), take(5)).subscribe(
    (e) => console.log(e),
    (error) => console.log('error: ', error),
    () => console.log('completed')
)