import { of } from "rxjs";
import { tap, mergeScan } from "rxjs/operators";

of(1, 2, 3, 4, 5).pipe(
    tap(x => console.log('crurrent value: ' + x)),
    mergeScan((acc, curr) => of(acc + curr), 0)
).subscribe(
    (e) => console.log('received: ' + e),
    (error) => console.log('error' + error.message),
    () => console.log('completed')
)

setTimeout(() => {

    console.log('\nEmit more values with merescan\n');
    of(1, 2, 3, 4, 5).pipe(
        tap(x => console.log('crurrent value: ' + x)),
        mergeScan((acc, curr) => of('a', 'b', acc + curr), 0)
    ).subscribe(
        (e) => console.log('received: ' + e),
        (error) => console.log('error' + error.message),
        () => console.log('completed')
    )


}, 1000)