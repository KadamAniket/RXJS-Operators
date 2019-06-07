import { of } from "rxjs";
import { repeat } from "rxjs/operators";

console.log('Repeat 3 times : 1 original + 2 repeat')
of(1, 2, 3, 4).pipe(repeat(3)).subscribe(
    (e) => console.log(e),
    (error) => console.log('error: ', error),
    () => console.log('completed')
)