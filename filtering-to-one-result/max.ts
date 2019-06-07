import { of } from "rxjs";
import { max } from "rxjs/operators";

of(1, 2, 3, 4, 5, -1, 10, -2).pipe(max()).subscribe(
    (e) => console.log(e),
    (error) => console.log('error: ', error),
    () => console.log('completed')
);

console.log('max with func as params')
of(1, 2, 3, 4, -1, -2, -5).pipe(max((num1, num2) => Math.abs(num1) > Math.abs(num2) ? 1 : -1)).subscribe(
    (e) => console.log(e),
    (error) => console.log('error: ', error),
    () => console.log('completed')
);