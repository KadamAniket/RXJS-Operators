import { of } from "rxjs";
import { scan, tap } from "rxjs/operators";

of(1, 2, 3, 4, 5).pipe(
    tap(x => console.log('crurrent value: ' + x)),
    scan((acc, curr) => acc + curr, 0)
).subscribe(
    (e) => console.log('received: ' + e),
    (error) => console.log('error' + error.message),
    () => console.log('completed')
)