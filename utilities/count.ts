import { of } from "rxjs";
import { count } from "rxjs/operators";

of(1, 2, 3, 4).pipe(count()).subscribe((e) => console.log('received: ' + e),
    (error) => console.log('error' + error.message),
    () => console.log('completed'))