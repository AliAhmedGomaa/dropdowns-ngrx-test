import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountriesComponent } from './components/countries/countries.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { CountriesResolver } from './resolvers/countries.resolver';
import { CountriesService } from './services/countries.service';
import { EffectsModule } from '@ngrx/effects';
import { CountiresEffects } from './store/effects';
import { StoreModule } from '@ngrx/store';
import { countriesReducer } from './store/reducer';

const routes: Routes = [
  {
    path: '',
    component: CountriesComponent,
    resolve: { countries: CountriesResolver }
  },
];

@NgModule({
  declarations: [
    CountriesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    EffectsModule.forFeature([CountiresEffects]),
    StoreModule.forFeature("countries", countriesReducer),
    SharedModule
  ],
  exports: [
    CountriesComponent
  ],
  providers: [
    CountriesResolver,
    CountriesService
  ]
})
export class CountriesModule { }
