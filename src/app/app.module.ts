import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MaincontentComponent } from './maincontent/maincontent.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CountryService } from './country.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule, MatPaginatorModule } from '@angular/material';
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
    MatButtonModule, MatInputModule,
    HttpClientModule,
    ReactiveFormsModule, FormsModule,
    MatTableModule, MatDialogModule, MatPaginatorModule

  ],
  entryComponents: [CountryDetailComponent],
  providers: [CountryService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
