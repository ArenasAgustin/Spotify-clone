import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@modules/auth/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  formLogin: FormGroup = new FormGroup({});
  errorSession: boolean = false;

  constructor(private _authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.formLogin = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(20),
      ]),
    });
  }

  sendLogin() {
    const { email, password } = this.formLogin.value;

    this._authService.sendCredentials(email, password).subscribe(
      (responseOK) => {
        this.errorSession = false;

        console.log('🆗🆗🆗', responseOK);

        this.router.navigate(['/', 'tracks']);
      },
      (responseError) => {
        this.errorSession = true;

        console.log('🔴🔴🔴', responseError);
      }
    );
  }
}
