import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthStateService } from './services/auth-state.service';
import { TokenService } from './services/token.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public isSignedIn: boolean = false;
  title = 'ip-config-front';

  constructor(private authState: AuthStateService, public router: Router, public token: TokenService) {}

  ngOnInit() {
    this.authState.userAuthState.subscribe(val => {
      this.isSignedIn = val;
    })
  }
  
  signOut() {
    this.authState.setAuthState(false);
    this.token.removeToken();
    this.router.navigate(['login']);
    alert('Successfully logged out');
  }

  signIn() {
    this.router.navigate(['/login']);
  }
}
