import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IAppState } from 'src/app/shared/types/AppState.interface';
import { allCountriesSelector } from '../../store/selector';
import { ICountry } from '../../types/country.interface';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {
  allCountries$!: Observable<ICountry[]>;
  constructor(private store: Store<IAppState>) { }

  ngOnInit(): void {
    this.getAllCountries()
  }

  getAllCountries() {
    this.allCountries$ = this.store.pipe(select(allCountriesSelector))
  }

}
