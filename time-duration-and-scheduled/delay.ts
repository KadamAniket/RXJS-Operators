import { of } from "rxjs";
import { delay } from "rxjs/operators";

of('aniket', 'kadam', 'ajit').pipe(delay(2000)).subscribe(
    x => console.log(x)
);

setTimeout(() => console.log(''), 3000);

of('anoop', 'kadam', 'ajit').pipe(delay(new Date(Date.now() + 4000))).subscribe(
    x => console.log(x)
);

