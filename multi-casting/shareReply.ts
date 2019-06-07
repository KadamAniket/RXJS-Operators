import { take, shareReplay } from "rxjs/operators";
import { interval } from "rxjs";

const source = interval(100).pipe(take(3));

source.subscribe((e) => console.log('received1: ' + e),
    (error) => console.log('error' + error.message),
    () => console.log('completed'))

setTimeout(() => {
    source.subscribe((e) => console.log('received2: ' + e),
        (error) => console.log('error' + error.message),
        () => console.log('completed'))
}, 150);


setTimeout(() => {
    console.log('Share reply with receiver 2 subscribing after source has emitted all values')
    const shareSource = source.pipe(shareReplay(1));

    shareSource.subscribe((e) => console.log('received1: ' + e),
        (error) => console.log('error' + error.message),
        () => console.log('completed'))

    setTimeout(() => {
        shareSource.subscribe((e) => console.log('received2: ' + e),
            (error) => console.log('error' + error.message),
            () => console.log('completed'))
    }, 500);

}, 1000)
