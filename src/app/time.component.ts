import { Component } from '@angular/core';

@Component({
    selector: 'time',
    template: `
        <div id="cont_time">
            <h1>Hello times {{name}}</h1>
        </div>
    `,
    styleUrls: [ 'src/app/layout.css' ]
})
export class TimeComponent { name = 'Angular'; }