import { of } from "rxjs";
import { pluck } from "rxjs/operators";

const data = [
    { name: 'Aniket', lastName: 'Kadam', address: { city: 'Pune', area: 'Katraj' } },
    { name: 'Nilesh', lastName: 'Bankar', address: { city: 'Pune', area: 'Hadapsar' } },
    { name: 'Kartik', lastName: 'Dhimate', address: { city: 'Pune', area: 'Wakad' } }
];

of(...data).pipe(
    pluck('name')
).subscribe(
    (e) => console.log('received: ' + e),
    (error) => console.log('error' + error.message),
    () => console.log('completed')
)


setTimeout(() => {
    console.log('\nNested Properties\n');

    of(...data).pipe(
        pluck('address', 'area')
    ).subscribe(
        (e) => console.log('received: ' + e),
        (error) => console.log('error' + error.message),
        () => console.log('completed')
    )

}, 1000)