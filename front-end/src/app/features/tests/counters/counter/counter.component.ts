import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ApplicationState } from 'src/app/store/reducers';
import { decrement, increment, reset } from '../store/actions/counter.actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  constructor(private store: Store<ApplicationState>) { }

  ngOnInit(): void {
  }

  incrementState(): void {
    this.store.dispatch(increment());
  }

  decrementState(): void {
    this.store.dispatch(decrement());
  }

  resetState(): void {
    this.store.dispatch(reset());
  }
}
