import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/shared/services/users/authentication.service';
import { distinctUntilChanged, pairwise } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  user = undefined;
  loginForm!: FormGroup;
  subscriptions: Subscription[] = [];

  constructor(private service: AuthenticationService,
              private formBuilder: FormBuilder) {

      this.loginForm = this.formBuilder.group({
        email: ['', [Validators.required]],
        password: ['', [Validators.required]]
      });
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(item => item.unsubscribe());
  }

  ngOnInit(): void {
    const soub = this.loginForm.valueChanges
    .pipe(
      distinctUntilChanged(),
      pairwise()
    )
    .subscribe(item => {
      console.info('changes ?', item);
    });

    // soub.unsubscribe()

    this.subscriptions.push(soub);
  }

  connect(): void {
    console.info('submit', this.loginForm.value);

    // user est null
    this.service.login(this.loginForm.value).subscribe(item => {
      // user n'est plus null
      this.user = item;
    });
  }
}
