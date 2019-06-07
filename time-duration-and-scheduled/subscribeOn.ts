import { of, asapScheduler, asyncScheduler } from "rxjs";
import { tap, subscribeOn } from "rxjs/operators";

of('asap').pipe(
    tap(val => console.log('value: ' + val + ' queued')),
    subscribeOn(asapScheduler)
).subscribe(
    x => console.log('value: ' + x + ' received')
);

of('async').pipe(
    tap(val => console.log('value: ' + val + ' queued')),
    subscribeOn(asyncScheduler)
).subscribe(
    x => console.log('value: ' + x + ' received')
);

of('immediate').subscribe(
    x => console.log('value: ' + x + ' received')
);