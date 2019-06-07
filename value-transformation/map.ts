import { of } from "rxjs";
import { map, filter } from "rxjs/operators";

of(1, 2, 3, 4).pipe(
    map(x => x * x)
).subscribe(
    (e) => console.log('received: ' + e),
    (error) => console.log('error' + error.message),
    () => console.log('completed')
)

setTimeout(() => {
    console.log('\nFilter Values before passing them to map\n')
    of(1, 2, 3, 4, 5).pipe(
        filter(x => x % 2 === 0),
        map(x => x * x)
    ).subscribe(
        (e) => console.log('received: ' + e),
        (error) => console.log('error' + error.message),
        () => console.log('completed')
    )

}, 1000)