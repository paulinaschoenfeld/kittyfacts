import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  public title = "KittyFacts";
  public authenticated = false;

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.authService.authenticated.subscribe((isAutenticated) => {
      this.authenticated = isAutenticated;
    })
  }
}
