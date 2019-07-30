import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { dataObject } from './models/data-object';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  private messageSource = new BehaviorSubject<dataObject>({} as dataObject);
  currentMessage = this.messageSource.asObservable();
  constructor() { }

  changeMessage(message: dataObject) {
    this.messageSource.next(message)
  }
}
