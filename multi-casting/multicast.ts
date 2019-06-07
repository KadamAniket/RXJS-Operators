import { of, Subject } from "rxjs";
import { multicast, tap } from "rxjs/operators";

const $thirdPartSource = of(1, 2, 3)
//.pipe(tap(x => console.log('value from source' + x)));

const source = $thirdPartSource.pipe(tap(() => console.log('this is a side effect')));

const $proxy = new Subject();

console.log('Basic example without multicase')

source.subscribe(x => console.log('Receiver1:' + x));
source.subscribe(x => console.log('Receiver2:' + x));

setTimeout(() => {
    console.log('\nBasic example with multicase \n')
    const connectable: any = source.pipe(multicast($proxy));

    $proxy.subscribe(x => console.log('Receiver1:' + x));
    $proxy.subscribe(x => console.log('Receiver2:' + x));

    connectable.connect();
}, 1000);

setTimeout(() => { }, 1000);

