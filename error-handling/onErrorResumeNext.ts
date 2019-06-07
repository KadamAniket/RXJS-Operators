import { of } from "rxjs";
import { map, onErrorResumeNext } from "rxjs/operators";

const source = of('original1', 'original3', 'original2', 'original4');
const backupSource = of('backup1', 'backup2', 'backup3', 'backup4');

console.log('With error \n');
source
    .pipe(
        map(m => {
            if (m === 'original2') {
                throw new Error('error occured');
            }
            return m;
        }),
        onErrorResumeNext(backupSource)
    ).subscribe(
        v => console.log(v),
        err => console.log('Error', err),
        () => console.log('complete')
    );

console.log('\n Without error \n');
source
    .pipe(
        map(m => m),
        onErrorResumeNext(backupSource)
    ).subscribe(
        v => console.log(v),
        err => console.log('Error', err),
        () => console.log('complete')
    );
