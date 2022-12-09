import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { SharedModule } from './shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { DefaultDataServiceConfig, EntityDataModule, HttpUrlGenerator } from '@ngrx/data';
import { entityConfig } from './entity-metadata';

const routes: Routes = [
  { path: '', redirectTo: 'countries', pathMatch: 'full' },

  {
    path: 'countries',
    loadChildren: () => import('./countries/countries.module').then(m => m.CountriesModule)
  },

  {
    path: 'courses',
    loadChildren: () => import('./courses/courses.module').then(m => m.CoursesModule)
  },

  {
    path: 'products',
    loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)
  },
]

const defaultDataServiceConfig: DefaultDataServiceConfig = {
  root: 'http://localhost:3000/api',
}


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([]),
    RouterModule.forRoot(routes),
    SharedModule,
    EntityDataModule.forRoot(entityConfig),
  ],
  providers: [
    {
      provide: DefaultDataServiceConfig,
      useValue: defaultDataServiceConfig
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
