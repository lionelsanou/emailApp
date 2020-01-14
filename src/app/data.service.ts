import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private emails: string[] = [];
  constructor() { }


  public addEmail(msg: string) {
    this.emails.push(msg);
  }
  public getEmails() {
    return this.emails;
  }
  public deleteEmail(index) {
    if (index !== -1) {
      this.emails.splice(index, 1);
    }
  }
}
