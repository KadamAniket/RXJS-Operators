import { of, interval } from "rxjs";
import { tap, publish, publishBehavior, publishLast, take } from "rxjs/operators";

const $thirdPartSource = interval(100).pipe(take(4));

const source = $thirdPartSource.pipe(tap(() => console.log('this is a side effect')));

const connectable: any = source.pipe(publishLast());

connectable.subscribe(x => console.log('Receiver1:' + x));

connectable.connect();
setTimeout(() => { connectable.subscribe(x => console.log('Receiver2:' + x)); }, 1000)



