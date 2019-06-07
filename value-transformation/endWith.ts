import { of } from "rxjs";
import { endWith } from "rxjs/operators";

of(1, 2, 3, 4).pipe(
    endWith(8, 9, 10)
).subscribe(
    (e) => console.log('received: ' + e),
    (error) => console.log('error'),
    () => console.log('completed')
);


setTimeout(() => {
    console.log('\nEmits even when source is empty');
    of().pipe(
        endWith(8, 9, 10)
    ).subscribe(
        (e) => console.log('received: ' + e),
        (error) => console.log('error'),
        () => console.log('completed')
    );

}, 1000)