import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, lastValueFrom } from 'rxjs';
import { TeacherSubjects, Subject, Teacher } from '../models/models';
import { subjects, teachersSubjects, teachers } from '../models/dummy.data';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

//   private apiUrl = 'http://your-api-url/users';

  constructor(private http: HttpClient) { }

  async getTeacherSubjects(): Promise<TeacherSubjects[]> {
    // return lastValueFrom(this.http.get<teacherSubjects[]>(this.apiUrl));
    return new Promise(resolve => resolve(teachersSubjects));
  }

  async getAllTeachers(): Promise<Teacher[]> {
    // return lastValueFrom(this.http.get<teacherSubjects[]>(this.apiUrl));
    return new Promise(resolve => resolve(teachers));
  }

  async getSubjects(): Promise<Subject[]> {
    return new Promise(resolve => resolve(subjects));
  }

}
