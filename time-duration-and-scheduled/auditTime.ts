import { of, interval } from "rxjs";
import { auditTime, take, tap } from "rxjs/operators";

interval(100).pipe(
    tap((x) => console.log('emitted: ' + x)),
    auditTime(500),
    take(5)
)
    .subscribe(
        (e) => console.log('received: ' + e),
        (error) => console.log('error'),
        () => console.log('completed')
    )