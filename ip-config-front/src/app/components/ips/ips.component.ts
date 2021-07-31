import { Component, OnInit, ViewChild } from '@angular/core';
import { Ip } from 'src/app/Ip';
import { IpService } from 'src/app/services/ip.service';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';
import { AddIpComponent } from '../add-ip/add-ip.component';
import { AuthStateService } from 'src/app/services/auth-state.service';

@Component({
  selector: 'app-ips',
  templateUrl: './ips.component.html',
  styleUrls: ['./ips.component.css']
})
export class IpsComponent implements OnInit {
  ips: Ip[] = [];
  formIp: Ip = {} as Ip;
  showAddIp: boolean = false;
  subscription: Subscription = new Subscription;
  isLoggedIn: boolean = false;
  
  constructor(private ipService: IpService, private uiService: UiService, private authState: AuthStateService) { 
    // tambahkan subscription ke uiService disini
    this.subscription = this.uiService.onToggle().subscribe((value) => (this.showAddIp = value));
    this.subscription = this.authState.userAuthState.subscribe((value) => (this.isLoggedIn = value));
  }

  ngOnInit(): void {
    this.ipService.getIps().subscribe((ips) => this.ips = ips);
  }

  addIp(ip: Ip): void {
    if(ip.id! > 0){
      this.ipService.updateIp(ip).subscribe(() => this.ipService.getIps().subscribe((ips) => this.ips = ips));
    }else{
      this.ipService.addIp(ip).subscribe((ip) => this.ips.push(ip));
    }
    // this.uiService.toggleAddIp();
  }

  editIp(ip: Ip): void {
    // this.ipService.editIp(ip.id!).subscribe(ip => this.formIp = ip);
  
    // this.uiService.toggleAddIp();
    if(this.isLoggedIn){
      this.uiService.openEditForm(ip.id!);
    }else{
      alert("To Edit Data, User must be logged in");
    }
  }

  UpdateIp(ip: Ip): void {
    
  }
}
