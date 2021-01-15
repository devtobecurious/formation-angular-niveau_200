import { Component, OnInit } from '@angular/core';
import { interval, of } from 'rxjs';
import { filter, map, mergeMap, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-switchmap',
  templateUrl: './switchmap.component.html',
  styleUrls: ['./switchmap.component.css']
})
export class SwitchmapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const getData = valeur => {
      return of('concact' + valeur);
    }

    //interval(1000).subscribe(item => console.info('Ping : ', item));

    // Wrong way, level 100 ;=)
    // interval(1000).subscribe(item => {
    //   getData(item).subscribe(itemBis => console.info(itemBis));
    // });

    interval(1000).pipe(
      filter(item => item % 2 == 0),
      switchMap(item => getData(item)),
      map(item => item + 'coucou'),
    )
    .subscribe(itemBis => console.info('2', itemBis));

  }

}
