import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { IAppState } from 'src/app/shared/types/AppState.interface';
import { CoursesTabActions } from '../store/actions';
import { ICourse } from '../types/Course.interface';
import { tap, finalize, first } from "rxjs/operators";
import { areCoursesLoaded } from '../store/selectors';


@Injectable({
  providedIn: 'root'
})
export class CoursesResolver implements Resolve<ICourse[]> {
  loaded = false;
  constructor(private store: Store<IAppState>) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.store.pipe(
      select(areCoursesLoaded),
      tap((areCoursesLoaded) => {
        if (!this.loaded && !areCoursesLoaded) {
          this.loaded = true
          return this.store.dispatch(CoursesTabActions.loadAllCourses());
        }
      }),
      first(),
      finalize(() => this.loaded = false)
    )
  }
}
