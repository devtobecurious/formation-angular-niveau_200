import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from 'src/app/core/models/users/user';

@Injectable()
export class AuthenticationService {

  constructor() { }

  login(user: User): Observable<{ token: string, name: string} | undefined> {
    console.info('service', user);

    return of({ token: '123', name: 'luke' });
  }
}


/*

0. Dummy
1. Fake
2. Stub
3. Mock




*/
