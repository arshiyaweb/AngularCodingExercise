import { TestBed, inject } from '@angular/core/testing';
import { CountryService } from './country.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CountryEntity } from './models/country-entity';
describe('CountryService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule, HttpClientTestingModule],
    providers: [CountryService]
  }));
  it('should be created', () => {
    const service: CountryService = TestBed.get(CountryService);
    expect(service).toBeTruthy();
  });

  it('should find countries by countryCode', inject(
    [HttpTestingController, CountryService],
    (
      httpMock: HttpTestingController,
      dataService: CountryService
    ) => {
      dataService.getCountryByCodes('col;gb;ie').subscribe(data => {
        const contry = data as CountryEntity[];
        expect(contry.length).toBe(3);
      });
      const req = httpMock.expectOne('https://restcountries.eu/rest/v2/alpha?codes=col;gb;ie');
      expect(req.request.method).toEqual('GET');
      // Then we set the fake data to be returned by the mock
      // req.flush(mockData);
    })
  );
  it('should find countries by region', inject(
    [HttpTestingController, CountryService],
    (
      httpMock: HttpTestingController,
      dataService: CountryService
    ) => {
      dataService.getCountryByCodes('Asia').subscribe(data => {
        const contry = data as CountryEntity[];
        expect(contry.length).toBe(50);
      });
    })
  );
});
