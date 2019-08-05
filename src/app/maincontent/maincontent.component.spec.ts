import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaincontentComponent } from './maincontent.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MatPaginatorModule, MatButtonModule, MatInputModule, MatTableModule, MatDialogModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { CountryService } from '../country.service';
import { DataServiceService } from '../data-service.service';
describe('MaincontentComponent', () => {
  let component: MaincontentComponent;
  let fixture: ComponentFixture<MaincontentComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MaincontentComponent],
      imports: [ReactiveFormsModule, BrowserModule,
        ReactiveFormsModule, FormsModule,
        BrowserAnimationsModule, HttpClientModule,
        MatTableModule, MatDialogModule, MatPaginatorModule],
      providers: [CountryService, DataServiceService],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(MaincontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('To be invoke ngOnInit function', () => {
    spyOn(component, 'ngOnInit');
    component.ngOnInit();
    expect(component.ngOnInit).toHaveBeenCalled();
  });
});
