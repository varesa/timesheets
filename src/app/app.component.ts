import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <people></people>
        <dates></dates>
        <time></time>
    `,

})
export class AppComponent { name = 'Angular'; }