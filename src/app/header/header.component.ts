import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private dataService:DataServiceService) { }

  ngOnInit() {
  }
  filterRegion(param){
  this.dataService.changeMessage({filterType:"region",filterValue:param});
  }
  filterCountry(event){
    //console.log(event.target.value);
    this.dataService.changeMessage({filterType:"countryCode",filterValue:event.target.value});
  }
}
