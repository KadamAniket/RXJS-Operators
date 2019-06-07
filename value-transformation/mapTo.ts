import { of } from "rxjs";
import { mapTo } from "rxjs/operators";

of(1, 2, 3, 4).pipe(
    mapTo('default')
).subscribe(
    (e) => console.log('received: ' + e),
    (error) => console.log('error' + error.message),
    () => console.log('completed')
)
