import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ICourse } from '../types/Course.interface';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  apiUrl = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) { }

  getCourses(): Observable<ICourse[]> {
    return this.http.get<ICourse[]>(`${this.apiUrl}/courses`)
  }
}
