import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthStateService } from 'src/app/services/auth-state.service';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  loginForm!: FormGroup;
  errors: null;

  constructor(public router: Router, public fb: FormBuilder, public authService: AuthService, private token: TokenService, private authState: AuthStateService) { 
    this.loginForm = this.fb.group({
      email: [],
      password: []
    })
  }

  ngOnInit(): void {
    
  }

  onSubmit() {
    this.authService.signin(this.loginForm.value).subscribe(
      result => {
        this.responseHandler(result);
      },
      error => {
        this.errors = error.error;
        alert("Username or Password Invalid");
      }, () => {
        this.authState.setAuthState(true);
        this.loginForm.reset();
        this.router.navigate(['/']);
      }
    )
  }

  responseHandler(data: any) {
    this.token.handleData(data.access_token);
  }

}
