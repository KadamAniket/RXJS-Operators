import { of } from "rxjs";
import { tap } from "rxjs/operators";

of(1, 2, 3).pipe(tap(x => console.log(x))).subscribe((e) => console.log('received: ' + e),
    (error) => console.log('error' + error.message),
    () => console.log('completed'))