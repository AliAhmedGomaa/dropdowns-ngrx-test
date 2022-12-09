import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ICountry } from '../types/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  apiUrl = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) { }

  getCountries(): Observable<ICountry[]> {
    return this.http.get<ICountry[]>(`${this.apiUrl}/countries`)
  }
  
}
