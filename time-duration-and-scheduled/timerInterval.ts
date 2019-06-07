import { timer } from "rxjs";
import { timeInterval, take } from "rxjs/operators";

timer(0, 500).pipe(timeInterval(), take(5)).subscribe(x => console.log(x))