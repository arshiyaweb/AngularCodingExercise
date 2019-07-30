import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs';
import { HeaderComponent } from './header/header.component';
import { MaincontentComponent } from './maincontent/maincontent.component';
//services
import{CountryService } from './country.service';
//Meterial Design
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button' ;
import {MatInputModule} from '@angular/material/input';
// HttpClient module for RESTful API
import { HttpClientModule } from '@angular/common/http';
//import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule,MatPaginatorModule} from '@angular/material';
import { CountryDetailComponent } from './country-detail/country-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MaincontentComponent,
    CountryDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,    
    MatButtonModule,MatInputModule,
    HttpClientModule,
    ReactiveFormsModule,
   MatTableModule,MatDialogModule,MatPaginatorModule
   
  ],
  entryComponents:[CountryDetailComponent],
  providers: [CountryService],

  bootstrap: [AppComponent]
})
export class AppModule { }
