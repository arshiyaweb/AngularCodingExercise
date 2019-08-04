import { Component, OnInit, ViewChild } from '@angular/core';
import { CountryEntity } from '../models/country-entity';
import { CountryService } from '../country.service';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';
import { CountryDetailComponent } from '../country-detail/country-detail.component';
import { MatTableDataSource, MatDialog, MatPaginator } from '@angular/material';
import { DataServiceService } from '../data-service.service';
@Component({
  selector: 'app-maincontent',
  templateUrl: './maincontent.component.html',
  styleUrls: ['./maincontent.component.css']
})
export class MaincontentComponent implements OnInit {
  codes = '';
  resign = '';
  dataSource: MatTableDataSource<CountryEntity>;
  displayedColumns: string[] = ['name', 'capital', 'currencies'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private restApi: CountryService, private dialog: MatDialog, private dataService: DataServiceService) { }
  ngOnInit() {
    this.dataService.currentMessage.subscribe(x => {
      if (x.filterType === 'countryCode') {
        this.restApi.getCountryByCodes(x.filterValue).subscribe((data) => {
          this.dataSource = new MatTableDataSource<CountryEntity>(data as CountryEntity[]);
          this.dataSource.paginator = this.paginator;
        });
      } else {
        if (x.filterType === 'region') {
          this.restApi.getCountryByRegion(x.filterValue).subscribe((data) => {
            this.dataSource = new MatTableDataSource<CountryEntity>(data as CountryEntity[]);
            this.dataSource.paginator = this.paginator;
          });
        }
      }
    });
  }
  selectCountry(country: { name: any; area: string; languages: { [x: string]: any; }[]; population: any; }) {
    const key = 'name';
    this.dialog.open(CountryDetailComponent, {
        data: {
        Name: country.name,
        Area: country.area + ' sq km',
        Languages: country.languages[0][key],
        Population: country.population
      }
    });
  }
  clear() {
    this.dataSource = new MatTableDataSource<CountryEntity>();
  }}


