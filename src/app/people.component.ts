import { Component } from '@angular/core';

@Component({
    selector: 'people',
    template: `
        <div id="cont_people">
            <h1>Hello people {{name}}</h1>
        </div>
    `,

    styleUrls: [ 'src/app/layout.css' ]
})
export class PeopleComponent { name = 'Angular'; }