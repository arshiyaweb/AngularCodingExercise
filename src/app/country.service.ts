import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {map, retry, catchError } from 'rxjs/operators';
import { CountryEntity } from './models/country-entity';
@Injectable({
  providedIn: 'root'
})
export class CountryService {
  // Define API
  apiURL = 'https://restcountries.eu/rest/v2';


  constructor(private http: HttpClient) { }
  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  
  private extractData(res: Response) {
    let body = res;
    return body || { };
  }
 // getCountryByCodes(codes): Observable<CountryEntity[]> {
   // return this.http.get<CountryEntity[]>(this.apiURL + '?codes=' + codes);
  //}
  getCountryByCodes(codes): Observable<CountryEntity[]> {
    return this.http.get<CountryEntity[]>(this.apiURL + '/alpha?codes=' + codes)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }  
  // HttpClient API getCountryByCodes() method => Fetch Country
  getCountryByRegion (region): Observable<CountryEntity[]> {
    return this.http.get<CountryEntity[]>(this.apiURL + '/region/' + region)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }  
  // Error handling 
  handleError(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
 }
}
