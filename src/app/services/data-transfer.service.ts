import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoginData } from '../components/page1/page1.component';

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {

  private loginDataSubject = new BehaviorSubject<LoginData>(new LoginData());
  private flag: boolean = false;
  private user: string = '';

  constructor() { }

  setData(data: LoginData) {
    this.loginDataSubject.next(data);
  }

  getData() {
    return this.loginDataSubject.asObservable();
  }

  setFlag(data: boolean) {
    this.flag = data;
  }

  getFlag() {
    return this.flag;
  }

  setUser(user: string) {
    this.user = user;
  }
  getUser() {
    return this.user;
  }
}
