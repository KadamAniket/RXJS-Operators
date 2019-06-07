import { of } from "rxjs";
import { every, tap } from "rxjs/operators";

of(1, 2, 3, 4, 5).pipe(
    every(x => x < 10)
).subscribe((e) => console.log('received: ' + e),
    (error) => console.log('error' + error.message),
    () => console.log('completed'))


setTimeout(() => {
    of(1, 2, 3, 4, 5).pipe(
        tap(x => console.log('value processins' + x)),
        every(x => x < 3)
    ).subscribe((e) => console.log('received: ' + e),
        (error) => console.log('error' + error.message),
        () => console.log('completed')
    )
}, 1000);