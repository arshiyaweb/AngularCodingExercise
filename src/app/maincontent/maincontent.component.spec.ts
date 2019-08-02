import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { MaincontentComponent } from './maincontent.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('MaincontentComponent', () => {
  let component: MaincontentComponent;
  let fixture: ComponentFixture<MaincontentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaincontentComponent ],
      imports: [ReactiveFormsModule ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaincontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

 
});
