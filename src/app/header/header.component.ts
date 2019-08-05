import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { DataObject } from '../models/data-object';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  inputText = '';
  constructor(private dataService: DataServiceService) { }
  ngOnInit() {
    this.dataService.currentMessage.subscribe(data => {
      if (data.filterType === 'clearInputText') {
        this.inputText = '';
      }
    });
  }
  filterRegion(param: string) {
    this.dataService.changeMessage({ filterType: 'region', filterValue: param });
  }
  filterCountry(event: { target: { value: string; }; }) {
    this.dataService.changeMessage({ filterType: 'countryCode', filterValue: event.target.value });
  }
}
