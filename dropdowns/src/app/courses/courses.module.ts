import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './components/courses/courses.component';
import { SharedModule } from '../shared/shared.module';
import { CoursesResolver } from './resolvers/courses.resolver';
import { CoursesService } from './services/courses.service';
import { CoursesEffects } from './store/effects';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { coursesReducers } from './store/reducers';
const routes: Routes = [
  {
    path: '',
    component: CoursesComponent,
    resolve: { courses: CoursesResolver }
  },
];

@NgModule({
  declarations: [
    CoursesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature("courses", coursesReducers),
    EffectsModule.forFeature([CoursesEffects]),
  ],
  providers: [
    CoursesService,
    CoursesResolver
  ]
})
export class CoursesModule { }
