import { of } from "rxjs";
import { elementAt } from "rxjs/operators";

of(6, 78, 3, 4, 5).pipe(elementAt(3)).subscribe(
    (e) => console.log(e),
    (error) => console.log('error: ', error),
    () => console.log('completed')
);

// // throw error : out of bound
of(6, 78, 3, 4, 5).pipe(elementAt(100)).subscribe(
    (e) => console.log(e),
    (error) => console.log('error: ', error),
    () => console.log('completed')
);

// throw error : ArgumentOutOfRangeError_1.ArgumentOutOfRangeError
of(6, 78, 3, 4, 5).pipe(elementAt(-1)).subscribe(
    (e) => console.log(e),
    (error) => console.log('error: ', error),
    () => console.log('completed')
);