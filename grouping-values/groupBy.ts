import { of } from "rxjs";
import { groupBy, mergeMap, toArray } from "rxjs/operators";

const data = [
    { id: 1, name: 'Aniket', city: 'Pune' },
    { id: 1, name: 'Kartik', city: 'Pune' },
    { id: 1, name: 'Nilesh', city: 'Baramati' },
    { id: 1, name: 'Mayur', city: 'MP' },
    { id: 1, name: 'Yogesh', city: 'Baramati' }
];

console.log('Group by City');
of(...data).pipe(groupBy(m => m.city), mergeMap(group$ => group$.pipe(toArray()))).subscribe(
    (e) => console.log(e),
    (error) => console.log('error: ', error),
    () => console.log('completed')
)

console.log('Group by Id');
of(...data).pipe(groupBy(m => m.id), mergeMap(group$ => group$.pipe(toArray()))).subscribe(
    (e) => console.log(e),
    (error) => console.log('error: ', error),
    () => console.log('completed')
)