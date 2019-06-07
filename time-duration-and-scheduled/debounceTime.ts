import { Observable } from "rxjs";
import { debounceTime } from "rxjs/operators";

const events = Observable.create(observer => {
    observer.next(1);
    setTimeout(() => observer.next(2), 550);
    setTimeout(() => observer.next(3), 1000);
});

events.pipe(debounceTime(500)).subscribe(
    x => console.log('values received:', x)
);