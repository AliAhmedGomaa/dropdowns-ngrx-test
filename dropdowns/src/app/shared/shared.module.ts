import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DropdownClickDirective } from './components/dropdown/dropdown-click.directive';
import { HttpClientModule } from "@angular/common/http";
import { CoursesModule } from '../courses/courses.module';
import { ProductsModule } from '../products/products.module';
import { CountriesModule } from '../countries/countries.module';
import { TabsComponent } from './components/tabs/tabs.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    DropdownComponent,
    DropdownClickDirective,
    TabsComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    HttpClientModule,
    RouterModule
  ],
  exports: [
    DropdownComponent,
    TabsComponent
  ]
})
export class SharedModule { }
