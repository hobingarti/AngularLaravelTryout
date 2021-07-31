import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faEdit } from '@fortawesome/free-regular-svg-icons';
import { Subscription } from 'rxjs';
import { Ip } from 'src/app/Ip';
import { AuthStateService } from 'src/app/services/auth-state.service';

@Component({
  selector: 'app-ip-item',
  templateUrl: './ip-item.component.html',
  styleUrls: ['./ip-item.component.css']
})
export class IpItemComponent implements OnInit {
  @Input() ip: Ip = {} as Ip;
  @Output() onEditIp: EventEmitter<Ip> = new EventEmitter;
  faEdit = faEdit;
  subscription: Subscription = new Subscription;
  public isLoggedIn: boolean = false;

  constructor(private authState: AuthStateService) { 
    this.subscription = this.authState.userAuthState.subscribe((value) => this.isLoggedIn = value);
  }

  ngOnInit(): void {
  }

  onEdit(ip: Ip): void {
    this.onEditIp.emit(ip);
  }

}
