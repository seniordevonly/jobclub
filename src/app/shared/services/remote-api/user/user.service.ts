import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Teacher} from '../../../models/user/teacher/teacher.model';
import {environment} from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public httpClient: HttpClient) { }

  public getTeachers(): Observable<Teacher[]> {
    console.log('getTeachers hei hei');
    return this.httpClient.get<Teacher[]>(environment.services.baseUrl + '/teachers');
  }

}
