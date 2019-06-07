import { of } from "rxjs";
import { tap, publish, publishBehavior } from "rxjs/operators";

const $thirdPartSource = of(1, 2, 3)

const source = $thirdPartSource.pipe(tap(() => console.log('this is a side effect')));

const connectable: any = source.pipe(publishBehavior(-1));

connectable.subscribe(x => console.log('Receiver1:' + x));
connectable.subscribe(x => console.log('Receiver2:' + x));

setTimeout(() => { console.log('now connecting'); connectable.connect(); }, 1000)



