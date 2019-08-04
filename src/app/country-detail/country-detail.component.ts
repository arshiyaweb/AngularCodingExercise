import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.css']
})
export class CountryDetailComponent implements OnInit {
  form: FormGroup;
  CName: string;
  constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<CountryDetailComponent>, @Inject(MAT_DIALOG_DATA)
  { Name, Area, Languages, Population }) {
    this.form = fb.group({
      name: [Name],
      area: [Area],
      languages: [Languages],
      population: [Population],
    });
  }
  ngOnInit() { }
  close() {
    this.dialogRef.close();
  }
}
