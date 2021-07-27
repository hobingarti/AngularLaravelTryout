import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddIp: boolean = false;
  private subject = new Subject<any>();
  private subjectEditForm = new Subject<any>();

  constructor() { }

  toggleAddIp(): void {
    this.showAddIp = !this.showAddIp;
    this.subject.next(this.showAddIp);
  }

  openEditForm(id: number): void {
    this.subjectEditForm.next(id);
    
    this.showAddIp = true;
    this.subject.next(this.showAddIp);
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }

  onOpenEditForm(): Observable<any> {
    return this.subjectEditForm.asObservable();
  }
  
}
