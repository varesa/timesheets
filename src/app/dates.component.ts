import { Component } from '@angular/core';

@Component({
    selector: 'dates',
    template: `
        <div id="cont_dates">
            <h1>Hello dates {{name}}</h1>
        </div>
    `,

    styleUrls: [ 'src/app/layout.css' ]
})
export class DatesComponent { name = 'Angular'; }