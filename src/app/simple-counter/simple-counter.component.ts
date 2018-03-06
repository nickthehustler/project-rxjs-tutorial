import { Component, AfterViewInit } from '@angular/core';

// Observable imports
import { Observable } from 'rxjs';

//Observable operators and methods
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-simple-counter',
  templateUrl: './simple-counter.component.html',
  styleUrls: ['./simple-counter.component.scss']
})
export class SimpleCounterComponent implements AfterViewInit {
  counter: number;

  constructor() { 
    this.counter = 0;
  }

  ngAfterViewInit() {

    // You need the button you plan on clicking to create
    // the observable.
    let button = document.querySelector('.counter-btn');

    // Create observable around click event on button
    // We map each click event to the value 1
    let myObservable = Observable.fromEvent(button, 'click').map(() => 1);

    // Now we need to subscribe to our observable, myObservable
    // so that when it emits a value we can act on it.
    myObservable.subscribe((val) => { this.counter += val });
  }

}
