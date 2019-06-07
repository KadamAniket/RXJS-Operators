import { of, timer } from "rxjs";
import { throttleTime, take } from "rxjs/operators";

timer(0, 2000)
    .pipe(
        throttleTime(3000), take(4)
    )
    .subscribe(
        x => console.log(`value ${x} recieved at ${new Date().toLocaleTimeString()}`)
    );