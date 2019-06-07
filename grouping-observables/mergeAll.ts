import { of } from "rxjs";
import { mergeAll } from "rxjs/operators";

const source1 = of(1, 2, 3, 4, 5, 6);
const source2 = of(7, 8, 9);

of(source1, source2).pipe(mergeAll()).subscribe(
    (e) => console.log(e),
    (error) => console.log('error: ', error),
    () => console.log('completed')
);