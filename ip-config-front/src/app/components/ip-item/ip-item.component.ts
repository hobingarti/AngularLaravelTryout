import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Ip } from 'src/app/Ip';

@Component({
  selector: 'app-ip-item',
  templateUrl: './ip-item.component.html',
  styleUrls: ['./ip-item.component.css']
})
export class IpItemComponent implements OnInit {
  @Input() ip: Ip = {} as Ip;
  @Output() onEditIp: EventEmitter<Ip> = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }

  onEdit(ip: Ip): void {
    this.onEditIp.emit(ip);
  }

}
