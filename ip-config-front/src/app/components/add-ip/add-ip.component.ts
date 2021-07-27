import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ip } from 'src/app/Ip';
import { IpService } from 'src/app/services/ip.service';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-add-ip',
  templateUrl: './add-ip.component.html',
  styleUrls: ['./add-ip.component.css']
})
export class AddIpComponent implements OnInit {
  @Output() onAddIp: EventEmitter<Ip> = new EventEmitter;
  @Input() formIp: Ip = {} as Ip;

  id!: number;
  ipaddress: string = '';
  comment: string = '';
  showAddIp: boolean = false;
  subscription: Subscription = new Subscription;

  constructor(private uiService: UiService, private ipService: IpService) { 
    this.subscription = this.uiService.onToggle().subscribe((value) => (this.showAddIp = value));
    this.subscription = this.uiService.onOpenEditForm().subscribe((value) => this.loadForm(value));
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if(!this.ipaddress){
      alert('Please add an IP Address');
      return;
    }

    if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(this.ipaddress) == false) {  
      alert("You have entered an invalid IP address!")  
      return;
    }

    const newIp = {
      id: this.id,
      ipaddress: this.ipaddress,
      comment: this.comment
    }

    this.onAddIp.emit(newIp);

    this.id = 0;
    this.ipaddress = '';
    this.comment = '';
    this.uiService.toggleAddIp();
  }

  loadForm(id: number): void {
    this.ipService.editIp(id).subscribe((value) => this.fetchForm(value));
  }

  fetchForm(ip: Ip): void {
    this.id = ip.id!;
    this.ipaddress = ip.ipaddress;
    this.comment = ip.comment;
  }

  setAttributes(ip: Ip): void {
    this.ipaddress = ip.ipaddress;
    this.comment = ip.comment;
  }

}
