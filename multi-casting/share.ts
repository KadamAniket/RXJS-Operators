import { interval } from "rxjs";
import { share, take } from "rxjs/operators";

const source = interval(100).pipe(take(2));

const val = source.pipe(share());

val.subscribe(x => console.log('Receiver1:' + x))
val.subscribe(x => console.log('Receiver2:' + x))
val.subscribe(x => console.log('Receiver3:' + x))

setTimeout(() => {
    console.log('Delay in subscribing\n')
    const val = source.pipe(share());

    val.subscribe(x => console.log('Receiver1:' + x))
    setTimeout(() => val.subscribe(x => console.log('Receiver2:' + x)), 120);
    setTimeout(() => val.subscribe(x => console.log('Receiver3:' + x)), 320);

}, 1000);

