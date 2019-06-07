import { of } from "rxjs";
import { isEmpty } from "rxjs/operators";

of().pipe(isEmpty()).subscribe((e) => console.log('received: ' + e),
    (error) => console.log('error' + error.message),
    () => console.log('completed'))

console.log('source emits 1 value')
of(1).pipe(isEmpty()).subscribe((e) => console.log('received: ' + e),
    (error) => console.log('error' + error.message),
    () => console.log('completed'))