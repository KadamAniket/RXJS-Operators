import { of, Notification } from "rxjs";
import { tap, dematerialize } from "rxjs/operators";

of(
    Notification.createNext(1),
    Notification.createNext(2),
    // Notification.createError('error'),
    Notification.createComplete()
).pipe(
    tap(x => console.log(x)),
    dematerialize()
).subscribe(
    (e) => console.log('received: ' + e),
    (error) => console.log('error' + error.message),
    () => console.log('completed')
)