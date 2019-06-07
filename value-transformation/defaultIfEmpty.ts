import { of } from "rxjs";
import { defaultIfEmpty } from "rxjs/operators";

of().pipe(defaultIfEmpty('no value')).subscribe(
    (e) => console.log('received: ' + e),
    (error) => console.log('error'),
    () => console.log('completed')
);

setTimeout(() => {
    console.log('\nDefault value not emitted when source emits anything \n');
    of('hello').pipe(defaultIfEmpty('no value')).subscribe(
        (e) => console.log('received: ' + e),
        (error) => console.log('error'),
        () => console.log('completed')
    );
}, 1000)