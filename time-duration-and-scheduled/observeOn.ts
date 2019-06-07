import { of, asapScheduler, asyncScheduler } from "rxjs";
import { tap, observeOn } from "rxjs/operators";

of('asap').pipe(
    tap(val => console.log('value: ' + val + ' queued')),
    observeOn(asapScheduler)
).subscribe(
    x => console.log('value: ' + x + ' received')
);

of('async').pipe(
    tap(val => console.log('value: ' + val + ' queued')),
    observeOn(asyncScheduler)
).subscribe(
    x => console.log('value: ' + x + ' received')
);

of('immediate').subscribe(
    x => console.log('value: ' + x + ' received')
);