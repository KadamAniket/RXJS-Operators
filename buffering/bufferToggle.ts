import { interval } from 'rxjs';
import { tap, bufferToggle, take } from 'rxjs/operators';

const opening = interval(400).pipe(tap(() => console.log('opening')));
const closing = () => interval(300).pipe(tap(() => console.log('closing')));

interval(100)
    .pipe(
        tap((x) => console.log(x)),
        bufferToggle(opening, closing),
        take(3)
    ).subscribe(valueSet => console.log('Valueset:', valueSet))