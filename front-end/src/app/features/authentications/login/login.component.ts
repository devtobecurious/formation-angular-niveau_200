import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/shared/services/users/authentication.service';
import { distinctUntilChanged, pairwise, takeUntil } from 'rxjs/operators';
import { Subject, Subscription } from 'rxjs';
import { ApplicationState } from 'src/app/store/reducers';
import { Store } from '@ngrx/store';
import { login } from '../store/actions/authentication.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  destroy$: Subject<boolean> = new Subject();

  user = undefined;
  loginForm!: FormGroup;
  subscriptions: Subscription[] = [];

  constructor(private store: Store<ApplicationState>,
              private formBuilder: FormBuilder) {

      this.loginForm = this.formBuilder.group({
        email: ['', [Validators.required]],
        password: ['', [Validators.required]]
      });
  }

  ngOnDestroy(): void {
    //this.subscriptions.forEach(item => item.unsubscribe());
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  ngOnInit(): void {
    const soub = this.loginForm.valueChanges
    .pipe(
      distinctUntilChanged(),
      pairwise(),
      takeUntil(this.destroy$)
    )
    .subscribe(item => {
      console.info('changes ?', item);
    });

    // soub.unsubscribe()

    // this.subscriptions.push(soub);
  }

  connect(): void {
    console.info('submit', this.loginForm.value);

    this.store.dispatch(login({ user: this.loginForm.value }));

    // user est null
    // this.service.login(this.loginForm.value).subscribe(item => {
    //   // user n'est plus null
    //   this.user = item;
    // });
  }
}
