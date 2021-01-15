import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ApplicationState } from 'src/app/store/reducers';
import { defaultSelector } from '../store/selectors/counter.selectors';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  count$: Observable<number>;

  constructor(private store:Store<ApplicationState>) { }

  ngOnInit(): void {
    this.count$ = this.store.pipe(
      select(defaultSelector)
    );
  }

}
