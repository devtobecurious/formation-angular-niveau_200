import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  public content: BehaviorSubject<string> = new BehaviorSubject('');


  constructor() { }


  launchSearch(value: string): void {
    this.content.next(value);
  }
}
