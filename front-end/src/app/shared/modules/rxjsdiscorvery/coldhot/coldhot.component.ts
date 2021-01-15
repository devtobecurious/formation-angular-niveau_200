import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-coldhot',
  templateUrl: './coldhot.component.html',
  styleUrls: ['./coldhot.component.css']
})
export class ColdhotComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const observableCold$ = new Observable(observer => {
      observer.next(Math.random() * 100);
    });

    observableCold$.subscribe(item => console.info('1. ColdhotComponent', item));
    observableCold$.subscribe(item => console.info('2. ColdhotComponent', item));

    const observableHot$ = new Observable(observer => {
      observer.next(Math.random() * 100);
    }).pipe(shareReplay(2));

    observableHot$.subscribe(item => console.info('3. ColdhotComponent', item));
    observableHot$.subscribe(item => console.info('4. ColdhotComponent', item));


    const random = Math.random() * 100;

    const observableHold2$ = new Observable(observer => {
      observer.next(random);
    });

    observableHold2$.subscribe(item => console.info('5. ColdhotComponent', item));
    observableHold2$.subscribe(item => console.info('6. ColdhotComponent', item));
  }

}
