import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class AuthenticationService {

  constructor() { }

  login(): Observable<{ token: string, name: string} | undefined> {
    return of({ token: '123', name: 'luke' });
  }
}


/*

0. Dummy
1. Fake
2. Stub
3. Mock




*/
