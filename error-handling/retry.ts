import { of } from "rxjs";
import { map, retry } from "rxjs/operators";

of('a', 1).pipe(
    map((m: any) => m.toUpperCase()),
    retry(2)
).subscribe(
    m => console.log(m),
    error => console.log('Error' + error),
    () => console.log('complete')
);