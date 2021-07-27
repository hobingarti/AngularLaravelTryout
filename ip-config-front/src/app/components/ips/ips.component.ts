import { Component, OnInit, ViewChild } from '@angular/core';
import { Ip } from 'src/app/Ip';
import { IpService } from 'src/app/services/ip.service';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';
import { AddIpComponent } from '../add-ip/add-ip.component';

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
  
  constructor(private ipService: IpService, private uiService: UiService) { 
    // tambahkan subscription ke uiService disini
    this.subscription = this.uiService.onToggle().subscribe((value) => (this.showAddIp = value));
  }

  ngOnInit(): void {
    this.ipService.getIps().subscribe((ips) => this.ips = ips);
  }

  addIp(ip: Ip): void {
    this.ipService.addIp(ip).subscribe((ip) => this.ips.push(ip));
    this.uiService.toggleAddIp();
  }

  editIp(ip: Ip): void {
    // this.ipService.editIp(ip.id!).subscribe(ip => this.formIp = ip);
  
    // this.uiService.toggleAddIp();
    this.uiService.openEditForm(ip.id!);
  }

  UpdateIp(ip: Ip): void {
    
  }
}
