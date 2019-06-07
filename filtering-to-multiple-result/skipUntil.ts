import { timer } from "rxjs";
import { skipUntil, take } from "rxjs/operators";

timer(0, 100)
    .pipe(skipUntil(timer(500)), take(10))
    .subscribe(e => console.log(e))