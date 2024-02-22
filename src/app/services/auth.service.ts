import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private mockLogin = "Cat";
  private mockPass = "GimmeFacts"

  authenticated: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  public authenticate(login: string, password: string): boolean {
    const result = login === this.mockLogin && password === this.mockPass;
    this.authenticated.next(result);
    return result;
  }

  public logOut() {
    this.authenticated.next(false);
  }
}
