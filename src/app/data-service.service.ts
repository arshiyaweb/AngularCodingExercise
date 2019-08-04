import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DataObject } from './models/data-object';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  private messageSource = new BehaviorSubject<DataObject>({} as DataObject);
  currentMessage = this.messageSource.asObservable();
  constructor() { }
  changeMessage(message: DataObject) {
    this.messageSource.next(message);
  }
}
