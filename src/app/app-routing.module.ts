import {Routes } from '@angular/router';
import { CounterButtonsComponent } from './counter-buttons/counter-buttons.component';
import { SimpleCounterComponent } from './simple-counter/simple-counter.component';
import { StopButtonComponent } from './stop-button/stop-button.component';


export const appRoutes: Routes = [
    { path: 'counter', component: SimpleCounterComponent },
    { path: 'twobuttoncounter', component: CounterButtonsComponent },
    { path: 'stopbutton', component: StopButtonComponent },
  ];