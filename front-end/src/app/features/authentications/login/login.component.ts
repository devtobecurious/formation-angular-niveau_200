import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/shared/services/users/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = undefined;

  constructor(private service: AuthenticationService) { }

  ngOnInit(): void {

  }

  connect(): void {
    // user est null
    this.service.login().subscribe(item => {
      // user n'est plus null
      this.user = item;
    });
  }
}
