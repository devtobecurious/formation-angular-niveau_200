import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { AuthenticationService } from 'src/app/shared/services/users/authentication.service';
import { LoginComponent } from './login.component';

// const fakeService: AuthenticationService = {
//   login() {
//     console.info('Login appelé');
//   }
// }


describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let service: AuthenticationService;
  let stubService: { login: jasmine.Spy } = jasmine.createSpyObj('AuthenticationService', ['login']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        LoginComponent
      ],
      providers: [
        // { provide: AuthenticationService, useValue: fakeService }
        { provide: AuthenticationService, useValue: stubService }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;

    service = TestBed.inject(AuthenticationService);
  });

  it('should create', () => {
    // Red Green Refactor

    /// code avant

    // Arrange
    // (empty)

    // Act
    fixture.detectChanges();

    // Assert
    expect(component).toBeTruthy();
  });

  it('should display login and password input', () => {
    // Arrange

    // Act
    fixture.detectChanges();

    // Assert
    const inputLogin = fixture.nativeElement.querySelector('input[type=text].login');
    expect(inputLogin).toBeTruthy();

    const inputPassword = fixture.nativeElement.querySelector('input[type=text].password');
    expect(inputPassword).toBeTruthy();
  });

  it('should display button to click', () => {
    // Arrange

    // Act
    fixture.detectChanges();

    // Assert
    const buttonClick = fixture.nativeElement.querySelector('button.login');
    expect(buttonClick).toBeTruthy();
    expect(buttonClick.textContent).toBe('Se connecter');

  });

  it('should be call connect when click to login', () => {
    // Arrange
    spyOn(component, 'connect');

    // Act
    fixture.detectChanges();
    const buttonClick = fixture.nativeElement.querySelector('button.login');
    buttonClick.click();

    // Assert
    expect(component.connect).toHaveBeenCalled();
  });

  it('should user be connected when click to login, with login and password', () => {
    // Arrange
    const user = { token: '123', name: 'luke' };
    stubService.login.and.returnValue(of(user));
    // spyOn(service, 'login');

    expect(component.user).toBe(undefined);

    // Act
    fixture.detectChanges();
    component.connect();

    // Assert
    expect(component.user).toBeTruthy();
    expect(service.login).toHaveBeenCalled();
  });
});
