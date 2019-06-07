import { interval } from "rxjs";
import { take, bufferTime, skip } from "rxjs/operators";

interval(1000)
    .pipe(
        take(6),
        bufferTime(2000, 2000)
    ).subscribe(val => console.log(val));