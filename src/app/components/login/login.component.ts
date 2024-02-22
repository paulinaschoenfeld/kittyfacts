import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { log } from '@angular-devkit/build-angular/src/builders/ssr-dev-server';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  public login = '';
  public password = '';
  public errorMessage = '';

  constructor(private authService: AuthService) {
  }

  public onLogin() {
    const result = this.authService.authenticate(this.login, this.password);
    this.errorMessage = !result ? "The credentials are wrong, please try again" : '';
  }

  public clearError() {
    this.errorMessage = '';
  }

}
