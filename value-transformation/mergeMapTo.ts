import { of } from "rxjs";
import { mergeMapTo } from "rxjs/operators";

of(1, 2, 3).pipe(
    mergeMapTo(of('a', 'b', 'c'))
).subscribe(
    (e) => console.log('received: ' + e),
    (error) => console.log('error' + error.message),
    () => console.log('completed')
);


setTimeout(() => {
    console.log('mergeMap with result combine function');

    of(1, 2, 3).pipe(
        mergeMapTo(of('a', 'b', 'c'), (a, b) => { return `${b}${a}` })
    ).subscribe(
        (e) => console.log('received: ' + e),
        (error) => console.log('error' + error.message),
        () => console.log('completed')
    );
}, 1000);