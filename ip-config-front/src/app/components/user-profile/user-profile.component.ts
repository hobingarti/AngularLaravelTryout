import { Component, OnInit } from '@angular/core';
import { AuthService, User } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  userProfile!: User;

  constructor(private authService: AuthService) { 
    this.authService.profileUser().subscribe(data => (this.userProfile  = data, console.log(data)));
  }

  ngOnInit(): void {
  }

}
