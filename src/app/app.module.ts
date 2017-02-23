import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import {PeopleComponent} from "./people.component";
import {DatesComponent} from "./dates.component";
import {TimeComponent} from "./time.component";

@NgModule({
    imports:      [ BrowserModule ],
    declarations: [ AppComponent, PeopleComponent, DatesComponent, TimeComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }