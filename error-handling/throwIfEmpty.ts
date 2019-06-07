import { of } from "rxjs";
import { throwIfEmpty } from "rxjs/operators";

of().pipe(
    throwIfEmpty()
).subscribe(
    () => console.log('success'),
    (er) => console.log('error', er),
    () => console.log('complete')
);