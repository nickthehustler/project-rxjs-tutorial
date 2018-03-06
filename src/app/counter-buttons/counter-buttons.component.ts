import { Component, AfterViewInit } from '@angular/core';

// Observable imports
import { Observable } from 'rxjs';

//Observable operators and methods
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/map';
import 'rxjs/observable/merge';

@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.scss']
})
export class CounterButtonsComponent implements AfterViewInit {
  counter: number;

  constructor() { 
    this.counter = 0;
  }

  ngAfterViewInit() {
    let incrementButton = document.querySelector('.increment');
    let decrementButton = document.querySelector('.decrement');

    let incrementObservable = Observable.fromEvent(incrementButton, 'click').map(() => 1);
    let decrementObservable = Observable.fromEvent(decrementButton, 'click').map(() => -1);

    let combinedObservable = Observable.merge(incrementObservable, decrementObservable);

    combinedObservable.subscribe((val) => {
      this.counter += val;
    });
  }

}
