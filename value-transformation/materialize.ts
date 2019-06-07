import { interval, of } from "rxjs";
import { take, materialize, tap, map } from "rxjs/operators";

interval(10).pipe(
    take(5),
    materialize()
).subscribe(
    (e) => console.log(e),
    (error) => console.log('error' + error.message),
    () => console.log('completed')
)

setTimeout(() => {
    console.log('\nWith error\n')
    of('a', 2, 'b').pipe(
        map((x: string) => x.toUpperCase()),
        materialize()
    ).subscribe(
        x => console.log(x)
    )

}, 1000)