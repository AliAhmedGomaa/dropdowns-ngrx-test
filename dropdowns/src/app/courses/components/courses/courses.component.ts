import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { IAppState } from 'src/app/shared/types/AppState.interface';
import { allCoursesSelector } from '../../store/selectors';
import { ICourse } from '../../types/Course.interface';
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  allCourses$!: Observable<ICourse[]>;

  constructor(
    private store: Store<IAppState>
  ) { }

  ngOnInit(): void {
    this.getAllCourses()
  }

  getAllCourses() {
    this.allCourses$ = this.store.pipe(
      select(allCoursesSelector)
    )
  }

}
