import { of, interval } from "rxjs";
import { delayWhen } from "rxjs/operators";

of(1, 2, 3).pipe(
    delayWhen(x => interval(x * 1000))

).subscribe(x => console.log(x))