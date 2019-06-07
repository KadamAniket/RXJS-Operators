import { of } from "rxjs";
import { startWith } from "rxjs/operators";

of(1, 2, 3, 4).pipe(
    startWith(0)
).subscribe(
    (e) => console.log('received: ' + e),
    (error) => console.log('error'),
    () => console.log('completed')
);

setTimeout(() => {

    console.log('\n Emits when source is empty');
    of().pipe(
        startWith(0)
    ).subscribe(
        (e) => console.log('received: ' + e),
        (error) => console.log('error'),
        () => console.log('completed')
    );

}, 1000)