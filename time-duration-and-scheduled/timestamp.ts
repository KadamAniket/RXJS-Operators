import { timer } from "rxjs";
import { take, timestamp, delay } from "rxjs/operators";

timer(0, 2000).pipe(timestamp(), delay(3000), take(5)).subscribe(x => console.log(`Value:${x.value} at ${new Date(x.timestamp).toLocaleTimeString()}`))