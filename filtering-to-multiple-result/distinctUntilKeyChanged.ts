import { of } from "rxjs";
import { distinctUntilKeyChanged } from "rxjs/operators";

const data = [
    { id: 1, name: 'Aniket', company: 'tieto', address: { id: 1 } },
    { id: 2, name: 'Anoop', company: 'tieto1', address: { id: 1 } },
    { id: 3, name: 'Anuja', company: 'tieto1', address: { id: 2 } },
    { id: 4, name: 'Atharva', company: 'tieto', address: { id: 2 } },
    { id: 4, name: 'Arush', company: 'tieto', address: { id: 1 } }
];

of(...data).pipe(distinctUntilKeyChanged('company')).subscribe(
    (e) => console.log(e.name),
    null,
    () => console.log('completed')
)


console.log('\nCheck for nested properties\n')
of(...data).pipe(distinctUntilKeyChanged('address', (addr1, addr2) => addr1.id === addr2.id)).subscribe(
    (e) => console.log(e.name),
    null,
    () => console.log('completed')
)