import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, retry, catchError } from 'rxjs/operators';
import { CountryEntity } from './models/country-entity';
@Injectable({
  providedIn: 'root'
})
export class CountryService {
  apiURL = 'https://restcountries.eu/rest/v2';
  constructor(private http: HttpClient) { }
  getCountryByCodes(codes: string): Observable<CountryEntity[]> {
    return this.http.get<CountryEntity[]>(this.apiURL + '/alpha?codes=' + codes)
      .pipe(retry(1), catchError(this.handleError));
  }
  getCountryByRegion(region: string): Observable<CountryEntity[]> {
    return this.http.get<CountryEntity[]>(this.apiURL + '/region/' + region)
      .pipe(retry(1), catchError(this.handleError));
  }
  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
