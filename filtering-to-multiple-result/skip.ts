import { of } from "rxjs";
import { skip } from "rxjs/operators";

of(1, 2, 3, 4, 5, 6)
    .pipe(skip(2))
    .subscribe(x => console.log(x))